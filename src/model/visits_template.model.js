const { DataTypes, Model} = require('sequelize')
const database = require('../database')

class VisitsTemplate extends Model {}

VisitsTemplate.init(
    {
        id_code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        depot: {
            type: DataTypes.STRING,
            allowNull: false
        },
        route: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visitNo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        visitDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visitDateTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visitStatus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        costumerNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visitDuration: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: database,
        tableName: 'visitTemplate'
    }
)

module.exports = VisitsTemplate;