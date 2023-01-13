import { Sequelize } from "sequelize";

const db = new Sequelize("checklist-mern", "root", "dev", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default db;
