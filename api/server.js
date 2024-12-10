const dotenv = require('dotenv');
const express = require('express')
const {connectionToDatabase,sequelize} = require('./src/config/database.js')
dotenv.config();
const PORT = process.env.PORT || 3000;
//instancio el servidor
const server = express();

// Middleware para parsear JSON
server.use(express.json());

//conexion a la base de datos
connectionToDatabase()

sequelize
.sync({ force: false }) // Vuelve a crear las tablas
.then(()=>console.log('tablas creadas correctamente')
)
.catch((error) => console.error("Error:", error));

console.log(sequelize);

// Routing
server.listen(PORT,()=>{
    console.log(`server online in http://localhost:${PORT}/`);
});


