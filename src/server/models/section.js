var mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost/Order");
var Schema = mongoose.Schema;
var SectionSchema = new Schema({
    "message": String,
    "result": [{
            "id": Number,
            "items": [{
                "id": String,
                "category": {
                    "id": Number,
                    "name": String
                },
                "price": Number,
                "name": String,
                "image": String
            }],
            "name": String,
        }],
    "code": Number
})


var Section = mongoose.model("Section",SectionSchema);

var sectioninfo = new Section({
        "message": "活动列表获取成功",
        "result": [{
            "id": 1,
            "items": [{
                "id": "c1af1bf1-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 1,
                    "name": "正餐"
                },
                "price": 68,
                "name": "午餐肉",
                "image": "http://vivian.mynatapp.cc/images/section20.jpg",
            }, {
                "id": "c392470b-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 3,
                    "name": "甜品"
                },
                "price": 36,
                "name": "核桃慕斯",
                "image": "http://vivian.mynatapp.cc/images/section19.jpg",
            }, {
                "id": "c4ed53b1-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 1,
                    "name": "正餐"
                },
                "price": 23,
                "name": "豆角",
                "image": "http://vivian.mynatapp.cc/images/section9.jpg",
            }, {
                "id": "c653c028-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 1,
                    "name": "正餐"
                },
                "price": 35,
                "name": "黑椒土豆浇饭",
                "image": "http://vivian.mynatapp.cc/images/section4.jpg",
            }, {
                "id": "c7c4b632-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 1,
                    "name": "正餐"
                },
                "price": 56,
                "name": "精致搭配套餐",
                "image": "http://vivian.mynatapp.cc/images/section14.jpg",
            }],
            "name": "限时秒杀"
        }, {
            "id": 2,
            "items": [{
                "id": "c93f217d-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 2,
                    "name": "水果"
                },
                "price": 23,
                "name": "菠萝切片",
                "image": "http://vivian.mynatapp.cc/images/section12.jpg",
            }, {
                "id": "cae89e37-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 1,
                    "name": "正餐"
                },
                "price": 32,
                "name": "咖喱饭",
                "image": "http://vivian.mynatapp.cc/images/section7.jpg",
            }, {
                "id": "b1b0be2a-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 3,
                    "name": "甜品"
                },
                "price": 28,
                "name": "奶油华夫",
                "image": "http://vivian.mynatapp.cc/images/section2.jpg",
            }, {
                "id": "b5115595-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 1,
                    "name": "正餐"
                },
                "price": 18,
                "name": "阳光煎蛋",
                "image": "http://vivian.mynatapp.cc/images/section10.jpg",
            }, {
                "id": "b7959dab-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 2,
                    "name": "甜品"
                },
                "price": 32,
                "name": "黑森林",
                "image": "http://vivian.mynatapp.cc/images/section11.jpg",
            }, {
                "id": "b97c08ea-53a9-11e7-90fe-002522cc5ae9",
                "category": {
                    "id": 1,
                    "name": "正餐"
                },
                "price": 48,
                "name": "黑椒牛排",
                "image": "http://vivian.mynatapp.cc/images/section17.jpg",
            }],
            "name": "新品热卖"
        }],
        "code": 1
})

//sectioninfo.save();
module.exports = Section;