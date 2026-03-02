var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var util=require('util');
var cors=require("cors");
var mysql=require('mysql');
var conn=mysql.createConnection({
    host:'localhost',
    root:'root',
    password:'',
    database:'savpatrang_project'
});
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

app.use(express.static("public"));


var exe=util.promisify(conn.query).bind(conn);

app.get("/",function(Req,res){
    res.render('home.ejs');
});
app.listen(1000);