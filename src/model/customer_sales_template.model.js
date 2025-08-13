const { DataTypes, Model } = require('sequelize')
const database = require('../database')

class CustomerSalesTemplate extends Model {}

CustomerSalesTemplate.init(
    {
        line_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true            
        },
        id_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        depot: {
            type: DataTypes.STRING,
            allowNull: false
        },
        region: {
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
        productCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        volume: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        value: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
    },
    {
        sequelize: database,
        tableName: 'customersalestemplate'
    }
)

module.exports = CustomerSalesTemplate;