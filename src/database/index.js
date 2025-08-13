const  {Sequelize} = require('sequelize')

const sequelize = new Sequelize('BATAPI', 'admin', 'Tr0p1g4l1a', {
    repositoryMode: true,
    host: 'batdatabase-new.cdiz94kaxgxm.af-south-1.rds.amazonaws.com',
    // port: 3306,
    dialect: 'mysql'
});

// const sequelize = new Sequelize('BATAPI-teste', 'admin', 'Tr0p1g4l1a', {
//     repositoryMode: true,
//     host: 'batdatabase-new.cdiz94kaxgxm.af-south-1.rds.amazonaws.com',
//     // port: 3306,
//     dialect: 'mysql'
// });





module.exports = sequelize;