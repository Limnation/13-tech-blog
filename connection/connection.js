const Sequelize = require("sequelize");

require("dotenv").config();

// create connection to our db
const sequelize = new Sequelize(process.env.MYSQL_URL);

module.exports = sequelize;
