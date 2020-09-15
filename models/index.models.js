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

module.exports.getMeasureByType = async function (name) {
    const pool = await sql.connect(config);
    let result = await pool.request()
        .input('type',sql.NVarChar,name)
        .execute('get_measure_by_type');
    if (result.recordset) return result.recordset ;
    else return [];
}

module.exports.getConversionRate = async function (name) {
    const pool = await sql.connect(config);
    let result = await pool.request()
        .input('type',sql.NVarChar,name)
        .execute('get_conversion_rate');
    if (result.recordset) return result.recordset ;
    else return [];
}

module.exports.getTopCurrency = async function () {
    const pool = await sql.connect(config);
    let result = await pool.request()
        .execute('T2004E_NhomViet_getTopCurrency');
    return result.recordset;
}

module.exports.getCurrency = async function () {
    const pool = await sql.connect(config);
    let result = await pool.request()
        .execute('getCurrency');
    return result.recordset;
}
