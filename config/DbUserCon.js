const { Sequelize } = require("sequelize");

const useradm = new Sequelize("arghapedia", "root", "dev32016", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = useradm;
