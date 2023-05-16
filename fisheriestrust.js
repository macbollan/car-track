
//const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://macb:vGdEAESmK0GRqDrl@cluster.xfzxm.mongodb.net/?retryWrites=true&w=majority");
require('dotenv').config();



var express=require("express");

var app=express();

var flash =require("connect-flash");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(flash());
// note all static file goes in the public dir.....make sure to select it in that ways


// THIS SHOWS MORE INFO ABT A BLOG

app.get("/:long/:lat", function(req, res){

    lat =req.params.lat;
    long=req.params.long;

    res.render("show.ejs", {lat:lat, long:long} );

});


// UPDATE AND DESTROY RUOTES===============================================


app.listen(5000,function(){
    console.log("App Has Started!!!! on port 80");
});
