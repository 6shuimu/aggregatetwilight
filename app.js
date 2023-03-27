// 导入express
const express = require('express');
// 创建服务器
const app = express();

// //解析x-www-form-urlencoded格式数据
express.urlencoded({extended:false});

// 解析json格式的请求体数据
express.json()

global.url = 'http://localhost:8080';

// 挂载网页等静态资源
app.use('/public/Webpage',express.static('./public/Webpage'))

// 主页面判断是手机还是电脑
app.use('/',function(req,res) {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(req.headers['user-agent'])){
      //手机端操作
      const temp = global.url +'/public/Webpage/PENavbar/index.html'
      res.redirect(temp)
      res.end()
    } else {
      //电脑端操作
      const temp = global.url +'/public/Webpage/PCNavbar/index.html'
      res.redirect(temp)
      res.end()
    }
})

// 启动服务器
app.listen(8080,function() {
  console.log('服务器开启成功!网址:http://localhost:8080');
})