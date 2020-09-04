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

module.exports.getData = async function (name) {
    const pool = await sql.connect(config);
    let result = await pool.request()
        .input('type',sql.NVarChar,name)
        .execute('get_measure_by_type');
    if (result.recordset) return result.recordset ;
    else return [];
}

