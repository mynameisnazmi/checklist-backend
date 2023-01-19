const Users = require("../models/UserModel");
const responseformat = require("../utils/responsformat");
const bcrypt = require("bcrypt");
//import path from "path";
//import fs from "fs";

const getAlluser = async (req, res) => {
  try {
    const response = await Users.findAll();
    responseformat(200, response, "ok", res);
  } catch (error) {
    console.log(error.message);
  }
};

const addUser = async (req, res) => {
  try {
    const { nik, nama, password, level, department } = req.body;
    const salt = bcrypt.genSaltSync(10);
    // hash password dengan salt
    const hashpassword = bcrypt.hashSync(password, salt);
    await Users.create({
      nik: nik,
      name: nama,
      password: hashpassword,
      level: level,
      department: department,
    });
    responseformat(200, "ok", "User Created", res);
  } catch (error) {
    responseformat(404, "not ok", "User not Create", res);
    //console.log(error.message);
  }
};

const Auth = async (req, res) => {
  const { nik, password } = req.body;
  try {
    const getPassword = await Users.findOne({
      where: {
        nik: nik,
      },
      attributes: ["password"],
    });
    bcrypt.compare(password, getPassword.password, async (err, cmpres) => {
      if (cmpres) {
        const userData = await Users.findOne({
          where: {
            nik: nik,
          },
          attributes: ["nik", "name", "level", "department"],
        });
        responseformat(200, userData, "ok", res);
      } else {
        responseformat(404, "not ok", "Password not Correct", res);
      }
    });
  } catch (error) {
    responseformat(404, "not ok", "Not Found", res);
    //    console.log(error.message);
  }
};

const deleteUser = async (req, res) => {
  const nik = req.params.nik;
  console.log(nik);
  const user = await Users.findOne({
    where: {
      nik: nik,
    },
  });

  if (!user) {
    responseformat(404, user, "Data not found", res);
  } else {
    try {
      await Users.destroy({
        where: {
          nik: nik,
        },
      });
      responseformat(200, user, "ok", res);
    } catch (error) {
      console.log(error.message);
    }
  }
};
// Export of all methods as object
module.exports = {
  //getAlluser,
  Auth,
  addUser,
  deleteUser,
};
