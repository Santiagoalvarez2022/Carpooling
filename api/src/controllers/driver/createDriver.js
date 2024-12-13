const {driver, trip} = require('../../config/database');


const CreateDriver = async({
    first_name,
    last_name,
    phone,
    gmail,
    password,
    alias,
    status,
    subcripted="asds"   
})=>{

//validaciones de parametros 
    if (!first_name || !last_name || !password || !gmail || !phone || !alias || !status || !subcripted ) throw Error('Datos Incompletos')
    
    

    const result = await driver.create({
        first_name:first_name.trim(),
        last_name:last_name.trim(),
        phone:phone.trim(),
        gmail:gmail.trim(),
        password:password.trim(),
        alias:alias.trim(),
        status:status.trim(),
        subcripted:subcripted.trim()
    })

        
    return result
        
}

module.exports = {
    CreateDriver
}