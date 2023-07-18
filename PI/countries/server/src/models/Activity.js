const { DataTypes } = require("sequelize");
const dataTypes = require("sequelize/lib/data-types");

module.exports = (sequelize) => {
    
    sequelize.define("Activity", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty:{
            type: DataTypes.INTEGER,
            validate:{
              "max": 5, 
              "min": 0
            },
            allowNull: false
        },
        duration:{
            //postgres quizás no acepta TIME, así que debería
            //probar usar DATE y sacar solo la hora?
            //type: DataTypes.DATE
            type: DataTypes.TIME
            // type: DataTypes.INTEGER,
            // validate:{
            //     "max":24,
            //     "min":1
            // }
        },
        season:{
            type: DataTypes.ENUM("Summer", "Fall", "Winter", "Autumn"),
            allowNull:false
        }
    })
}