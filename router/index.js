// 首页子应用(首页路由)
const express = require('express')

// 首页子应用
const indexApp = express()
const article = require('../middleware/article')
const tab = require('../middleware/tab')

/**
 * 加载首页用的
*/
indexApp.get('/', [article.getHot, tab.getTab], (req, res) => {
    let { HotArticle, Tabs } = req
    res.render('index', { hots: HotArticle, tabs: Tabs })
})
// indexApp.get('/article', [tab.getTab], (req, res) => {
//     let { Tabs } = req
//     res.render('article', { tabs: Tabs })
// })
// indexApp.get('/',(req, res) => {
//     res.render('index')
// })

module.exports = indexApp