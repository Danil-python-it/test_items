const { DataTypes } = require("sequelize");
const sequelize = require("../db")

const Category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    picture_addres: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Production = sequelize.define("production",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price_current: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Category.hasMany(Production)
Production.belongsTo(Category)


module.exports = {
   Category,
   Production 
} 