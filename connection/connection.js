const Sequelize = require("sequelize");

require("dotenv").config();

// create connection to jaws
const sequelize = new Sequelize(process.env.MYSQL_JAWS_URL);

module.exports = sequelize;
