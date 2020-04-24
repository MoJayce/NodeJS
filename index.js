/*
入口模块
*/
const express = require('express')
//  创建主应用
const app = express()

// 模板引擎设置
app.set('view engine','html')
app.set('views',`${__dirname}/views`)
app.engine('html',require('ejs').renderFile)

// 静态资源
app.use(express.static('static'))

// 调用首页子应用
// app.use('/',require('./router/index'))
app.use(/\/(index)?/,require('./router/index'))
// 调用导航栏
app.use('/',require('./router/article'))


// 监听服务器
app.listen(3000)
