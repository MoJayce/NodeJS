/*
*文章数据模型
*/
module.exports = class Article extends require('./model') {
    /**
     * 获取热门推荐文章
    //  * @param {integer} Nums 条目数
     * 
    */
    static getHot(Nums) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,`name`,phone,address FROM test WHERE hot = 1 LIMIT ?';
            this.query(sql, Nums).then(results => {
                resolve(results)
            }).catch(err => {
                console.log('获取热门id失败', err.message)
                reject(err)
            })
        })
    }
}