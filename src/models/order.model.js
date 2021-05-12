const {DataTypes} = require("sequelize");

module.exports = function(sequelize) {
    return sequelize.define("Order", {
        orderId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        orderName: {
            type: DataTypes.STRING,
            defaultValue: "test"
        },
        orderDate:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        shipDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        orderQuantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        orderAmount: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0.0,
            allowNull: false
        },
        orderStatus: {
            type: DataTypes.STRING,
            defaultValue: "pending"
        },
        arrivalDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    })
};