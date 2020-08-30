const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
// tao server
app.listen(PORT,function () {
    console.log("Server is running...");
});
// config cac file static
app.use(express.static("public"));
// config su dung ejs
app.set("view engine","ejs");
// config connect MSSQL
const mssql = require("mssql");

const config = {
    server:"DESKTOP-MAHRH4P\\SQLEXPRESS",
    database:"project_ki1",
    user:"sa",
    password:"123",
    options: {
        encrypt: false,
        enableArithAbort: true
    }
};
mssql.connect(config,function (err) {
    if(err) console.log(err);
    else console.log("connect DB thanh cong");
});
// tao doi tuong de truy van du lieu
var db = new mssql.Request();
// trang chu
app.get("/",function (req,res) {
    // lay du lieu
    db.query("SELECT * FROM view_so_sanh",function (err,rows) {
        if(err)
            res.send("Khong co ket qua");
        else
            res.render("length",{
                ss: rows.recordset
            })

    })
    //res.render("home");
});