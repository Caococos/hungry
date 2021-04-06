import {request} from "@/network/request";
// 导入封装后的axios插件 在这里进行数据的异步请求

export function getGoodsData() {
  return request({
    url: '/api/goods'
  })
}
export function getRatingsData() {
  return request({
    url: '/api/ratings'
  })
}
export function getSellerData() {
  return request({
    url: '/api/seller'
  })
}
// export class shopCart {
//   constructor(seller, goods) {
//     this.deliveryPrice = seller.deliveryPrice
//     this.minPrice = seller.minPrice
//   }
// }
