//redirection to routes
const express = require('express');
const mainRouter = express.Router();
const routerTrip = require('./trips/router');
const routerDriver = require('./drivers/router');
console.log('llegamos acas');



mainRouter.use('/driver', routerDriver)

mainRouter.use('/trip',routerTrip);
// mainRouter.post('/trip',async (res,req) =>{
//     console.log('llegamos aca');
    
// });


module.exports = mainRouter;
