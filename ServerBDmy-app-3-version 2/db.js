const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    
    process.env.BD_NAME, 
    process.env.BD_USER, 
    process.env.BD_POSSWORD, 
    
    {
        dialect: "postgres",
        host: process.env.BD_HOST, 
        port: process.env.BD_PORT 
    }
)






