// 首页子应用(首页路由)
const express = require('express')

// 首页子应用
const productApp = express()
const article = require('../middleware/article')
const tab = require('../middleware/tab')

/**
 * 加载文章页用的
*/
productApp.get('/product', [article.getHot, tab.getTab], (req, res) => {
    let { HotArticle, Tabs } = req
    res.render('product', { hots: HotArticle, tabs: Tabs })
})

module.exports = productApp