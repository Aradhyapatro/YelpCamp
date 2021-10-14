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
const index=require("./routes/main.js");
app.use("/",index);

// Post Requests
const indexpost=require("./routes/master.js");
app.use("/",indexpost);

// listening to port
app.listen(port,(req,res)=>{
    console.log("Server has started\n");
});