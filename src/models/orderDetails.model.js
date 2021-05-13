const {DataTypes} = require("sequelize");

module.exports = function(sequelize) {
    return sequelize.define("OrderDetail", {
        detailsId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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
        }
        
    })
};