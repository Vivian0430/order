var mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost/Order");
var BannerSchema = new mongoose.Schema({
    Id: String,
    Image: String,
    Link: String,
    Priority: Number
});


var Banner = mongoose.model("Banner", BannerSchema);

var banner1 = new Banner({

    Id: "716ec353-f47b-11e7-84b2-54e1adda4205",
    Image: "http://vivian.mynatapp.cc/images/banner1.jpg",
    Link: "",
    Priority: 99
})
var banner2 = new Banner({
    Id: "7171114f-f47b-11e7-84b2-54e1adda4205",
    Image: "http://vivian.mynatapp.cc/images/banner2.jpg",
    Link: "",
    Priority: 98
})
var banner3 = new Banner({
    Id: "717298cd-f47b-11e7-84b2-54e1adda4205",
    Image: "http://vivian.mynatapp.cc/images/banner4.jpg",
    Link: "",
    Priority: 97
})
var banner4 = new Banner({
    Id: "71745b27-f47b-11e7-84b2-54e1adda4205",
    Image: "http://vivian.mynatapp.cc/images/banner3.jpg",
    Link: "",
    Priority: 96

})


// banner1.save();
// banner2.save();
// banner3.save();
// banner4.save();
module.exports = Banner;