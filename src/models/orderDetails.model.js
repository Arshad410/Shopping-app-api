const {DataTypes} = require("sequelize");

module.exports = function(sequelize) {
    return sequelize.define("OrderDetail", {
        detailsId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey : true,
            allowNull : false
        },
        detailsName: {
            type: DataTypes.STRING
        },
        detailsQuantity: {
            type: DataTypes.INTEGER
        },
        detailsAmount : {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0.0,
            allowNull: false
        },
        detailsStatus : {
            type: DataTypes.STRING,
            defaultValue: "pending"
        }
    })
};