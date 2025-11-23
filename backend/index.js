
const express = require("express");
const mongoose = retuire("mongoose");

mongoose.connect("mongodb://localhost:27017/users", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
const app=express();
app.listen(1234);

app.get("/",function(req,res){res.send("orice")});
