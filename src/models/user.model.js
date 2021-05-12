const { DataTypes } = require("sequelize");
module.exports = function(sequelize){
    return sequelize.define("User", {
        userId: {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey: true,
            allowNull : false
        },
        userEmail: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true 
            }      
        },
        userContact: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userRole: {
            type: DataTypes.ENUM,
            values: ["user", "admin"],
            defaultValue: "user",
            validate: {
                isIn: [["admin", "user"]]
            }
        }
    })
}