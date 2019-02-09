var cart=require("../models/cart.js");
var formidable=require("formidable");
var list=require("../models/list.js");
var url=require("url");
exports.showLogin = function(req,res){
	res.render("login");
}

exports.showRegister = function(req,res){
	res.render("register");
}

exports.showDetail = function(req,res){
    var params = url.parse(req.url, true).query;
   // console.log(params.id);
    list.find({"id":params.id},function(err,data){
        res.setHeader("Access-Control-Allow-Origin", "*"); //允许所有域名访问
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200"); 
        console.log(data);
        res.json(data);
        return;
    })
}



exports.deleteProduct=function(req,res){
    var form=new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        cart.find({"_id":fields.id},function(err,data){
            //console.log(data);
            data[0].remove();
        })
    })
}
