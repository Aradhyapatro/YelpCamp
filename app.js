// requiring
const express = require('express');
const path = require('path');
const app=express();
const port=process.env.PORT || 3000;

// setting up the environment
app.set('view engine',"ejs");
app.set('views',path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

const index=require("./routes/get.js");
app.use("/",index);

app.listen(port,(req,res)=>{
    console.log("Server has started\n");
});