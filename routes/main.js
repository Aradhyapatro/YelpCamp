const express = require('express');
const router = express.Router();

var campgrounds=[{
    name:"SimonCreek",
    img:"https://pixabay.com/get/g0d115d8da44b1971884087473993a51a1f790da4eba7d09ec70d6315dc9c2cc718a5757d9b2eceb4f21abd1ed1c93189_340.jpg"
},
{
    name:"Besonig",
    img:"https://pixabay.com/get/gdc35d211cd4e65f1ca27671996aff15359207bbe65411de9ba3f9915e18dc1a4c3df282166186740bb7c0b8fe45fea79_340.jpg"
},
{
    name:"Sontosa",
    img:"https://pixabay.com/get/g90cc10547565f231fab05918d98ae92912b82ceaa520ab2f7cbf5a006268769d08a614bd806f3b46a0337ba5b9afdb05_340.jpg"
}
];

router.get('/', (req, res) => {
    res.render("landing");
});

router.get('/campground',(req,res)=>{
    res.render("campground",{camp:campgrounds});
});

router.get("/campground/new",(req,res)=>{
    res.render("new");
});

module.exports=router;
module.exports.variable=campgrounds;