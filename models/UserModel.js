import { Sequelize } from "sequelize";
import db from "../config/Dbconnect.js";

const { DataTypes } = Sequelize;

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

export default Users;

(async () => {
  await db.sync();
})();
