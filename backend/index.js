
const express = require("express");

const app=express();
app.listen(1234);

app.get("/",function(req,res){res.send("orice")});