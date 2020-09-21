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
        .input('keywords',sql.NVarChar,'%'+keyword+'%')
        .execute('T2004E_NhomViet_search_name_measure');
    if (result.recordset) return result.recordset ;
    else return [];
}

module.exports.searchCurrency = async function (key) {
    const pool = await sql.connect(config);
    let result = await pool.request()
        .input('key',sql.NVarChar,'%'+ key +'%')
        .execute('searchCurrency')
    if (result.recordset.length) return result.recordset
    else return [];
}

module.exports.searchHasUnit =async function (keyword) {
    const pool = await sql.connect(config);
    let result = await pool.request()
        .input('keyword',sql.NVarChar,keyword)
        .execute('T2004E_NhomViet_searchAllUnit')
    if (result.recordset) return  result.recordset;
    else return false;
}

module.exports.searchUnitByTypeAndKey =async function (type,key) {
    const pool = await sql.connect(config);
    let result = await pool.request()
        .input('keyword',sql.NVarChar,'%'+key+'%')
        .input('type',sql.NVarChar,type)
        .execute('T2004E_NhomViet_searchUnitSameType')
    return result.recordset
}