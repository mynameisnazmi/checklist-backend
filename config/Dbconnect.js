const { Sequelize } = require("sequelize");

const db = new Sequelize("checklist-mern", "root", "dev", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = db;
