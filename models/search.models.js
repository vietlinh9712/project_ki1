const sql = require('mssql');

const config = {
    user: 'sa',
    password: '123456',
    server: 'ADMIN\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
    database: 'Project_ki1',
    options: {
        encrypt: false,
        enableArithAbort: true
    }
}

module.exports.search = async function (keyword) {
    const pool = await sql.connect(config);
    let result = await pool.request()
        .input('keyword',sql.NVarChar,'%'+keyword + '%')
        .execute('search_name_measure');
    if (result.recordset) return result.recordset ;
    else return [];
}