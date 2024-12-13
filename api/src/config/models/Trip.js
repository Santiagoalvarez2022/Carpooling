const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
 sequelize.define(
     "trip",
     {
       id: {
           type: DataTypes.UUID,
           defaultValue: DataTypes.UUIDV4,
           allowNull: false,//si osi tiene que teer un valor 
           primaryKey: true,//
        },
        departureLocation: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        destinationLocation: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        tripDate: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        departureTime: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        estimatedArrivalTime: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        availability: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },

     {paranoid: true}
 ); // habilitar el borrado logico
};