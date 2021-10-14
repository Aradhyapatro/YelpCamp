const express= require('express');
const router=express.Router();
var campgrounds=require("./main");

router.post("/campground",(req,res)=>{
    var adding={
        name:req.body.name,
        img:req.body.URL
    }
    (campgrounds.variable).push(adding);
    res.redirect("/campground");
});

module.exports=router;