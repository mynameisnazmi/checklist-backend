const Users = require("../models/UserModel");
//import path from "path";
//import fs from "fs";

const getAlluser = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const addUser = async (req, res) => {
  try {
    const { nik, name, password, level, department } = req.body;
    const addUser = await Users.create({
      nik: nik,
      name: name,
      password: password,
      level: level,
      department: department,
    });

    res.send({
      Result: "Sukses",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const Auth = async (req, res) => {
  const { nik, password } = req.body;
  try {
    const response = await Users.findOne({
      where: {
        nik: nik,
        password: password,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Export of all methods as object
module.exports = {
  getAlluser,
  Auth,
  addUser,
};
