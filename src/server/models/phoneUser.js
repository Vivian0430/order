var mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost/Order");
var Schema = mongoose.Schema;
var PhoneUserSchema = new Schema({
	phone : String,
	password  : String
});

PhoneUserSchema.statics.insertPhone = function(json,callback){		
	var PhoneUser = new PhoneUser(json);
	PhoneUser.save(function(err){
		if(err){
			callback(-2); 
			return;
		}
		callback(1);
	});

}


var PhoneUser = mongoose.model("PhoneUser",PhoneUserSchema);

var ceshi=new PhoneUser({
	phone: 18815613683,
	password: 123456
})
//ceshi.save();
module.exports = PhoneUser;
