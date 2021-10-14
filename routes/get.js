const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Landing page will be ready soon\n");
});

module.exports=router;