const dotenv = require('dotenv');
const express = require('express')
const cors = require('cors');
const {connectionToDatabase,sequelize} = require('./src/config/database.js')
const mainRouter = require('./src/routes')
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

console.log(sequelize.models);
server.use(cors({
    origin: 'http://localhost:5173',  // Reemplaza con el origen de tu cliente
    credentials: true  // Permite el envío de credenciales como cookies
  }));
  
server.use('/api', mainRouter);


// Routing
server.listen(PORT,()=>{
    console.log(`server online in http://localhost:${PORT}/`);
});


