const express = require('express')
// 模拟后台数据接口
//(1),在头部引用express
var app = express();

var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();
app.use('/api', apiRoutes);   //通过路由请求数据

module.exports = {
  publicPath: "./",
  assetsDir: "static",
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    before(app) {
      app.get('/api/seller', function (req, res) {
        res.json({
          errNo: 0,
          data: seller  //接口返回json数据，上面配置的数据seller就赋值给data请求后就调用
        });
      });

      app.get('/api/goods', function (req, res) {
        res.json({
          errNo: 0,
          data: goods
        });
      });

      app.get('/api/ratings', function (req, res) {
        res.json({
          errNo: 0,
          data: ratings
        });
      });
    }
  }
}
