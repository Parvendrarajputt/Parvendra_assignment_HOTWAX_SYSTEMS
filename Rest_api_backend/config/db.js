const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Parvendra@1234",
    database: 'hotwax_ecommerce',
    authPlugins: {
        mysql_clear_password: () => () => Buffer.from('Parvendra@1234')
    }
})



module.exports = { db }