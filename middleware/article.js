const Article = require('../model/article')

module.exports = {

    /**
     * 文章中间件
     * 获取热门文章
    */
    getHot: (req, res, next) => {
        Article.getHot(2).then(results => {
            // console.log(results)
            req.HotArticle = results
            next()
        }).catch(err => {
            next(err)
        })
    }
}