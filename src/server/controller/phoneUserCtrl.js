var PhoneUser = require("../models/phoneUser.js");
var url = require("url");
exports.addPhoneUser=function(req,res){
	var params = url.parse(req.url, true).query;
		PhoneUser.insertPhone(params,function(result){
			res.json({"result":result});
		})
	
}
exports.getPhoneUser=function(req,res){
	//console.log("查询数据");
	var params = url.parse(req.url, true).query;
	PhoneUser.find({"phone":params.user,"password":params.password},function(err,result){
		res.json({"result":result});
	});
}