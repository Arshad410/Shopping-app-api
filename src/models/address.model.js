const {DataTypes} = require("sequelize");

module.exports = function(sequelize){
    return sequelize.define("Address", {
        addressId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        addressType : {
            type: DataTypes.ENUM,
            values: ["work","home","other"],
            defaultValue : "home"
        },
        aptNo : {
            type: DataTypes.STRING,
            allowNull: false
        },
        aptName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        locality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pincode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}