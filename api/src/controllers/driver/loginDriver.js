const {driver, trip} = require('../../config/database');

const loginDriver= async({first_name,last_name,password}) =>{
    console.log('datos recibidos para logearse ', first_name, last_name, password);
    if (!first_name || !last_name || !password  ) throw Error('Datos Incompletos')
    //busco el usuario
    const userDriver = await driver.findOne({where : {
        first_name:first_name.trim()
    }})

    console.log(userDriver, 'usuario encontrado');
    if (!userDriver) throw Error('Usuario no encontrado')
    if (userDriver.dataValues.password !== password) throw Error('Contraseña incorrecta')
    console.log(userDriver.dataValues);
    
    return userDriver
}

module.exports = {
    loginDriver
}