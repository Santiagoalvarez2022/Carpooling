const { Sequelize } = require('sequelize');
const fs = require("fs");
const path = require("path");
const dotenv = require('dotenv');
dotenv.config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
});



// const sequelize = new Sequelize(URL_DATABASE,{ logging: false});
const modelDefiners = [];
const basename = path.basename(__filename);



/* agregamos cada uno de los archivos a un array "modelDefiners" */
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
/* le pasamos por params a cada uno de los modelos definidos en la carpeta models "sequelize" */

/* le pasamos por params a cada uno de los modelos definidos en la carpeta models "sequelize" */

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);


const connectionToDatabase = async() =>{   
    
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
}

//relationships
const {driver, trip} = sequelize.models;

driver.hasMany(trip);
trip.belongsTo(driver)


  sequelize
  .sync({ force: false })
  .catch((error) => console.error("Error:", error));

module.exports = {sequelize, connectionToDatabase, ...sequelize.models};
 