const {DataTypes, Model} = require('sequelize')
const database = require('../database')

class JPTemplate extends Model {}

JPTemplate.init(
    {
        id_code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        region: {
            type: DataTypes.STRING,
            allowNull: false
        },
        depot: {
            type: DataTypes.STRING,
            allowNull: false
        },
        route: {
            type: DataTypes.STRING,
            allowNull: false
        },
        drName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visitDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: database,
        tableName: 'jptemplate'
    }
)

module.exports = JPTemplate;