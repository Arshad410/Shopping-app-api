const {Sequelize} = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: "mysql"
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./products.model")(sequelize);
db.user = require("./user.model")(sequelize);
db.order = require("./order.model")(sequelize);

db.user.hasMany(db.order);
db.order.belongsTo(db.user);

db.products.hasOne(db.order);
db.order.belongsTo(db.products); 

db.orderDetails = require("./orderDetails.model")(sequelize); 
db.user.hasOne(db.orderDetails); 
db.orderDetails.belongsTo(db.user);


db.payment = require("./payment.model")(sequelize); 
db.user.hasOne(db.payment);
db.payment.belongsTo(db.user);
db.payment.hasOne(db.orderDetails);
db.orderDetails.belongsTo(db.payment)

module.exports = db;   