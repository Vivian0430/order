var mongoose = require("mongoose");
var CartSchema = new mongoose.Schema({
 	cartCount:Number,
 	cartPath : String,
	cartName : String,  
	cartPrice: String,
	totalPrice: String
 });

CartSchema.statics.insertCart = function (json, callback) {

    var cart=new Cart(json);
    cart.save(function(err){
        if (err) {
            callback(-2);  //服务器错误
            return;
        }
        //发回1这个状态
        callback(1);

    });
	
}

// CartSchema.statics.removeProduct = function (json, callback) {

//     cart.remove({"_id":json},function(err){
//         if (err) {
//             callback(-2);  //服务器错误
//             return;
//         }
//         //发回1这个状态
//         callback(1);

//     });
    
// }


// CartSchema.statics.increaseProduct = function(json){
//    console.log(json);
// }



var Cart = mongoose.model("Cart",CartSchema);

module.exports = Cart;