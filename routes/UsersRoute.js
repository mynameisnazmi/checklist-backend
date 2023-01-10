import express from "express";
import { getUsers, Auth } from "../controllers/UsersController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/loginAuth", Auth);
//router.get("/products/:id", getProductById);
// router.post("/products", saveProduct);
// router.patch("/products/:id", updateProduct);
// router.delete("/products/:id", deleteProduct);

export default router;
