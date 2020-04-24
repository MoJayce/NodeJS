const Tab = require('../model/tab')

module.exports = {

    /**
     * 文章中间件
     * 获取热门文章
    */
    getTab: (req, res, next) => {
        Tab.getTab().then(results => {
            // console.log(results)
            req.Tabs = results
            next()
        }).catch(err => {
            next(err)
        })
    }
}