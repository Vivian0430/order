var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/Order");
var ListSchema = new mongoose.Schema({
    "id": String,
    "category": {
        "id": Number,
        "name": String
    },
    "price": Number,
    "describ": String,
    "name": String,
    "image": String
})

var List = mongoose.model("List", ListSchema);

var wucanrou = new List({
    "id": "c1af1bf1-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 1,
        "name": "正餐"
    },
    "price": 68,
    "describ": "精致美味的猪后腿肉",
    "name": "午餐肉",
    "image": "http://vivian.mynatapp.cc/images/section20.jpg",
})
var hetaomusi = new List({
    "id": "c392470b-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 3,
        "name": "甜品"
    },
    "price": 36,
    "name": "核桃慕斯",
    "describ": "香脆核桃搭配顺滑慕斯",
    "image": "http://vivian.mynatapp.cc/images/section19.jpg",
})
var doujiao = new List({
    "id": "c4ed53b1-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 1,
        "name": "正餐"
    },
    "price": 23,
    "name": "豆角",
    "describ": "要多吃蔬菜哦",
    "image": "http://vivian.mynatapp.cc/images/section9.jpg",
})
var tudou = new List({
    "id": "c653c028-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 1,
        "name": "正餐"
    },
    "price": 35,
    "describ": "香浓黑椒搭配软糯土豆",
    "name": "黑椒土豆浇饭",
    "image": "http://vivian.mynatapp.cc/images/section4.jpg",
})
var taocan = new List({
    "id": "c7c4b632-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 1,
        "name": "正餐"
    },
    "price": 56,
    "describ": "营养均衡合理搭配",
    "name": "精致搭配套餐",
    "image": "http://vivian.mynatapp.cc/images/section14.jpg",
})
var boluo = new List({
    "id": "c93f217d-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 2,
        "name": "水果"
    },
    "price": 23,
    "describ": "酸酸甜甜好新鲜",
    "name": "菠萝切片",
    "image": "http://vivian.mynatapp.cc/images/section12.jpg",
})
var galifan = new List({
    "id": "cae89e37-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 1,
        "name": "正餐"
    },
    "price": 32,
    "describ": "香浓咖喱配上米饭妙不可言",
    "name": "咖喱饭",
    "image": "http://vivian.mynatapp.cc/images/section7.jpg",
})
var huafu = new List({
    "id": "b1b0be2a-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 3,
        "name": "甜品"
    },
    "price": 28,
    "describ": "香软华夫饼搭配精细奶油",
    "name": "奶油华夫",
    "image": "http://vivian.mynatapp.cc/images/section2.jpg",
})
var jiandan = new List({
    "id": "b5115595-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 1,
        "name": "正餐"
    },
    "price": 18,
    "describ": "早餐必选",
    "name": "阳光煎蛋",
    "image": "http://vivian.mynatapp.cc/images/section10.jpg",
})
var heisenlin = new List({
    "id": "b7959dab-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 2,
        "name": "甜品"
    },
    "price": 32,
    "describ": "甜甜的蛋糕甜甜的你",
    "name": "黑森林",
    "image": "http://vivian.mynatapp.cc/images/section11.jpg",
})
var niupai = new List({
    "id": "b97c08ea-53a9-11e7-90fe-002522cc5ae9",
    "category": {
        "id": 1,
        "name": "正餐"
    },
    "price": 48,
    "describ": "鲜嫩牛排满满浓汁",
    "name": "黑椒牛排",
    "image": "http://vivian.mynatapp.cc/images/section17.jpg",
})

// wucanrou.save();
// hetaomusi.save();
// doujiao.save();
// tudou.save();
// taocan.save();
// boluo.save();
// galifan.save();
// huafu.save();
// jiandan.save();
// heisenlin.save();
// niupai.save();
module.exports = List;