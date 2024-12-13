const {driver, trip} = require('../../config/database');


const CreateTrip = async(idDriver,form) =>{
  if (idDriver.trim() === '') throw ('ID deconductor es undefined');
  /*
    - busco a usario conductor
    - añado viajes al usuario
  */

  const findDriver = await driver.findByPk(idDriver);
  

}

module.exports = {
  CreateTrip
}