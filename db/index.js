// 导入 mysql 模块
const mysql = require('mysql')
const { promisify } = require('util')
// 创建数据库连接对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})
//mysql 库不支持 Promise  先将db promise化
queryByPromisify = promisify(db.query).bind(db)
db.queryByPromisify = queryByPromisify
// 向外共享 db 数据库连接对象
module.exports = db