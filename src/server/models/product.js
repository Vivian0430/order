var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/shalaomao");
 var ProductSchema = new mongoose.Schema({
	path : String,
	name : String,  
	price: String
});

ProductSchema.statics.insertProduct = function(json,callback){
	var product = new Product(json);
	user.save(function(err){
		if(err){
			callback(-2);
			return;
		}
		callback(1);
	})
}

var Product = mongoose.model("Product",ProductSchema);

var zhengbao = new Product({
	path: "/images/1.jpg",
  	name: "蒸包",
  	price: "￥12"
})

var chenzi = new Product({
	path: "/images/2.jpg",
    name: "蛏子",
  	price: "￥32"
})

var haixianbao = new Product({
	path: "/images/3.jpg",
  		name: "海鲜煲",
  		price: "￥45"
})
var huiguorou = new Product({
	path: "/images/4.jpeg",
  		name: "回锅肉",
  		price: "￥34"
})

var hongshaopaigu = new Product({
	
      path: "/images/5.jpg",
  		name: "红烧排骨",
  		price: "￥34"
})

var xiaoji = new Product({
	  	path: "/images/6.jpg",
  		name: "小鸡炖蘑菇",
  		price: "￥34"
})

var shuijinxia = new Product({
	  	path: "/images/7.jpg",
  		name: "水晶虾",
  		price: "￥56"
})

var dazhaxie = new Product({
	  		path: "/images/8.jpg",
  		name: "大闸蟹",
  		price: "￥128"
})

// zhengbao.save();
// chenzi.save();
// haixianbao.save();
// huiguorou.save();
// hongshaopaigu.save();
// xiaoji.save();
// shuijinxia.save();
// dazhaxie.save();

module.exports = Product;