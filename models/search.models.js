const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'z@GH7ytQ',
    server: '101.99.13.2', // You can use 'localhost\\instance' to connect to named instance
    database: 'test',
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