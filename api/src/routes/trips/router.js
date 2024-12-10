const express = require('express');
const router = express.Router();

router.post('/newTrip', async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
});
