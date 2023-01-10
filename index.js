import express from "express";
//import FileUpload from "express-fileupload";
import cors from "cors";
import UsersRoute from "./routes/UsersRoute.js";

//const bodyParser = require("body-parser");
const app = express();

//app.use(bodyParser.json()); // to support JSON-encoded bodies
// app.use(
//   bodyParser.urlencoded({  // to support URL-encoded bodies
//     extended: true,
//   })
// );
app.use(cors());
app.use(express.json());
//app.use(FileUpload());
//app.use(express.static("public"));
app.use(UsersRoute);

app.listen(5000, () => console.log("Server Up and Running..."));
