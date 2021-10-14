const express= require('express');
const router=express.Router;

router.post("/campground",(req,res)=>{
    res.send("The post request was hit");
});

module.exports=router;