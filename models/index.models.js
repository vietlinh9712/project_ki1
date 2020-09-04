const sql = require('mssql');

const config = {
    user: 'sa',
    password: '123456',
    server: 'ADMIN\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
    database: 'Project_ki1'
}

const pool = sql.connect(config,function (err) {
    if (err) console.log(err);
});

