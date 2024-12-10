const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Trips = sequelize.define('Trips', {
    tripId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    departureLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destinationLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tripDate: {
      type: DataTypes.STRING, // Mejor usar `DataTypes.DATEONLY` si es posible.
      allowNull: false,
    },
    departureTime: {
      type: DataTypes.STRING, // Mejor usar `DataTypes.TIME` si es posible.
      allowNull: false,
    },
    estimatedArrivalTime: {
      type: DataTypes.STRING, // Mejor usar `DataTypes.TIME` si es posible.
      allowNull: false,
    },
    availability: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Trips;
};
