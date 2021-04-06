// 防抖函数封装
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

//简单节流函数封装
export function throttle(func, delay){
  let valid = true
  return function() {
    if(!valid){
      //休息时间 暂不接客
      return false
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false
    setTimeout(() => {
      func.apply(this)
      valid = true;
    }, delay)
  }
}
/* 请注意，节流函数并不止上面这种实现方案,
   例如可以完全不借助setTimeout，可以把状态位换成时间戳，然后利用时间戳差值是否大于指定间隔时间来做判定。
   也可以直接将setTimeout的返回的标记当做判断条件-判断当前定时器是否存在，如果存在表示还在冷却，并且在执行fn之后消除定时器表示激活，原理都一样
    */

// 前缘节流
export function throttling(func, wait, immediate) {
  let timer = null  //, timeStamp=0;
  let context, args;

  let run = () => {
    timer=setTimeout(()=>{
      if(!immediate){
        func.apply(context,args);
      }
      clearTimeout(timer);
      timer=null;
    },wait);
  }

  return function () {
    context=this;
    args=arguments;
    if(!timer){
      console.log("throttle, set");
      if(immediate){
        func.apply(context,args);
      }
      run();
    }else{
      console.log("throttle, ignore");
    }
  }
}



// 时间戳转日期
export function formatDate(date, fmt) {
  //1.获取年份
  //y
  //y+ -> 1个或者多个y
  //y* -> 0个或者多个y
  //y? -> 0个或者1个y
  //上面的是正则表达式的规则
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  //2.获取其他时间字符串
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),    //h和H h表达12小时制，H表示24小时制
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
