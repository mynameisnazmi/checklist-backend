const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/Dbconnect.js");

const Users = db.define(
  "users",
  {
    nik: {
      type: Sequelize.INTEGER(6),
      primaryKey: true,
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.INTEGER(2),
    department: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Users;

(async () => {
  await db.sync();
})();
