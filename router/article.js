// 首页子应用(首页路由)
const express = require('express')

// 首页子应用
const articleApp = express()
const article = require('../middleware/article')
const tab = require('../middleware/tab')

/**
 * 加载文章页用的
*/
articleApp.get('/article', [article.getHot, tab.getTab], (req, res) => {
    let { HotArticle, Tabs } = req
    res.render('article', { hots: HotArticle, tabs: Tabs })
})

module.exports = articleApp