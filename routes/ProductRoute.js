import express from "express";
import {
  getUser,
  // getProductById,
  // saveProduct,
  // updateProduct,
  // deleteProduct,
} from "../controllers/users";

const router = express.Router();

router.get("/users", getUser);
//router.get("/products/:id", getProductById);
// router.post("/products", saveProduct);
// router.patch("/products/:id", updateProduct);
// router.delete("/products/:id", deleteProduct);

export default router;
