const express = require('express');
const { CreateDriver } = require('../../controllers/driver/createDriver');
const {loginDriver} = require('../../controllers/driver/loginDriver')
const router = express.Router();

router.post('/', async(req,res)=>{

    try {
        console.log('creacion de usuario', req.body);
        const result = await CreateDriver(req.body)

        console.log(result, ' errorr');
        
        res.status(200).json(result)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


router.post('/login', async(req,res)=>{
    try {

        
        const result = await loginDriver(req.body)

        res.status(200).json(result)

    } catch (error) {
        res.status(400).json({error:error.message})

    }
}) 

module.exports = router
