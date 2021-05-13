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
db.orderDetails = require("./orderDetails.model")(sequelize); 
db.address = require("./address.model")(sequelize);
db.payment = require("./payment.model")(sequelize); 

db.user.hasMany(db.order);
db.order.belongsTo(db.user);

db.order.hasOne(db.orderDetails);
db.orderDetails.belongsTo(db.order); 

db.products.hasMany(db.orderDetails);
db.orderDetails.belongsTo(db.products); 

db.user.hasOne(db.orderDetails); 
db.orderDetails.belongsTo(db.user);

db.user.hasOne(db.address);
db.address.belongsTo(db.user);

db.user.hasOne(db.payment);
db.payment.belongsTo(db.user);


module.exports = db;    