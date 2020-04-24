// 首页子应用(首页路由)
const express = require('express')

// 首页子应用
const aboutApp = express()
const article = require('../middleware/article')
const tab = require('../middleware/tab')

/**
 * 加载文章页用的
*/
aboutApp.get('/about', [article.getHot, tab.getTab], (req, res) => {
    let { HotArticle, Tabs } = req
    res.render('about', { hots: HotArticle, tabs: Tabs })
})

module.exports = aboutApp