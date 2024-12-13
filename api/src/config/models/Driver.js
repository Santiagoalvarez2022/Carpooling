const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
 sequelize.define(
     "driver",
     {
       id: {
           type: DataTypes.UUID,
           defaultValue: DataTypes.UUIDV4,
           allowNull: false,//si osi tiene que teer un valor 
           primaryKey: true,//
        },
        first_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        gmail: {
            type: DataTypes.TEXT,
            allowNull: false,
        },    
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        alias: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        subcripted: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },

     {paranoid: true}
 ); // habilitar el borrado logico
};