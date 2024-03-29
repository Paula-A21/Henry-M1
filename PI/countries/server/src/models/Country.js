const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING,
      len:3,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flags: {
      type: DataTypes.STRING,
      allowNull:false
    },
    continents:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.INTEGER,
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  });
};