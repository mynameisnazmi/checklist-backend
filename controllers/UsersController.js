import Users from "../models/UserModel.js";
//import path from "path";
//import fs from "fs";

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const Auth = async (req, res) => {
  console.log(req.body.nik);
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