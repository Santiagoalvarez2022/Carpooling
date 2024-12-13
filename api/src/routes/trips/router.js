const express = require('express');
const router = express.Router();

router.post('/', async(req,res)=>{
    try {
        console.log('llegamos a trips');
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
});

module.exports = router
