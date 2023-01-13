const Users = require("../models/UserModel");
//import path from "path";
//import fs from "fs";

const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const Auth = async (req, res) => {
  const { nik, password } = req.body;

  res.send({
    test: "ini backend 2",
    nik,
    password,
  });
  // try {
  //   const response = await Users.findOne({
  //     where: {
  //       nik: 14077,
  //     },
  //   });
  //   res.json(response);
  // } catch (error) {
  //   console.log(error.message);
  // }
};

// Export of all methods as object
module.exports = {
  getUsers,
  Auth,
};
