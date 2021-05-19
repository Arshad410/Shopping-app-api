const {DataTypes} = require("sequelize");

module.exports = function(sequelize) {
    return sequelize.define("Payment", {
        paymentId: {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull : false
        },
        paymentAmount : {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0.0,
            allowNull: false
        },
        paymentMode : {
            type: DataTypes.ENUM,
            values: ["debit","credit","cash on delivery"],
            defaultValue: "cash on delivery"
        },
        paymentStatus: {
            type: DataTypes.STRING,
            defaultValue: "pending"
        },
        paymentDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        paymentReady: {
            type: DataTypes.ENUM,
            values: ["yes","no"],
            defaultValue: "yes"
        }
        
    })
}