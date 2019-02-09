var express = require("express");
var formidable = require("formidable");
var path = require("path");
var fs = require("fs");
var url = require("url");
var request = require("request");
var session = require('express-session');
var mongoose = require('mongoose');
var phoneUserCtrl = require("./controller/phoneUserCtrl.js");
var phonectrl = require("./controller/phonectrl.js");
var controller = require("./controller/controller.js");
var list=require("./models/list.js");
var section = require('./models/section.js');
var banner = require('./models/banner.js');
var app = express();

mongoose.connect("mongodb://localhost/Order");

mongoose.connection.on('connected',()=>{
  console.log('MongoDB connected success!');
});
mongoose.connection.on('error',(err)=>{
  console.log('MongoDB connected fail!');
});
mongoose.connection.on('dis',()=>{
  console.log('MongoDB disconnected !');
});


app.use(session({ 
	secret: 'Order', 
	cookie: { maxAge: 60000 * 30 } ,
	resave:false ,  
	saveUninitialized: true,
}));


app.set("view engine", "ejs");

app.get('/', controller.showLogin);//根路由（登录）
app.get('/login',controller.showLogin);//登录界面
app.get('/login/getUser',phonectrl.getUser);//登录界面
app.get('/register',controller.showRegister);
app.post('/register/addUser',phonectrl.addUser);//注册界面插入数据

app.post('/login',phoneUserCtrl.getPhoneUser);
app.post('/register',phoneUserCtrl.addPhoneUser);

app.get("/detail",controller.showDetail);

app.get("/section",function(req,res){
  section.find({},function(err,data){
  res.setHeader("Access-Control-Allow-Origin", "*"); //允许所有域名访问
  //res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200"); 
 // res.setHeader("Access-Control-Allow-Origin", "http://good.mynatapp.cc"); 
     //console.log(data);
     res.json(data);
     return;
  })
});


app.get("/list",function(req,res){
  list.find({},function(err,data){
  res.setHeader("Access-Control-Allow-Origin", "*"); //允许所有域名访问
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200"); 
 // res.setHeader("Access-Control-Allow-Origin", "http://good.mynatapp.cc"); 
     //console.log(data);
     res.json(data);
     return;
  })
});

app.get("/banner",function(req,res){
   banner.find({},function(err,data){
  res.setHeader("Access-Control-Allow-Origin", "*"); //允许所有域名访问
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  //res.setHeader("Access-Control-Allow-Origin", "http://good.mynatapp.cc"); 
   	 //console.log(data);
   	 res.json(data);
      return;
   })
})

app.use(express.static(__dirname + '/public'));

//app.get('*', controller.showNone); //404路由
app.listen(8088);
console.log("start");