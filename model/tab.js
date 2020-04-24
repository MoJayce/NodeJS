
/*
*栏目数据模型
*/
module.exports = class Tab extends require('./model') {
    /**
     * 获取栏目
    //  
     * 
    */
    static getTab() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,tabName,tabId,url FROM tab';
            this.query(sql).then(results => {
                resolve(results)
            }).catch(err => {
                console.log('获取tab栏失败', err.message)
                reject(err)
            })
        })
    }
}