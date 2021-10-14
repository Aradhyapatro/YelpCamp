// requiring
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app=express();
const port=process.env.PORT || 3000;

// setting up the environment
app.set('view engine',"ejs");
app.set('views',path.join(__dirname,"/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"/public")));

// Get Requests
const get=require("./routes/get.js");
app.use("/",get);

// Post Requests
const post=require("./routes/post.js");
app.use("/",post);

app.listen(port,(req,res)=>{
    console.log("Server has started\n");
});