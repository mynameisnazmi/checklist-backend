const { Router } = require("express");
const UsersController = require("../controllers/UsersController");

// Initialization
const router = Router();

router.get("/", UsersController.getAlluser);
router.post("/", UsersController.Auth);
router.post("/register", UsersController.addUser);
//router.get("/products/:id", getProductById);
// router.post("/products", saveProduct);
// router.patch("/products/:id", updateProduct);
// router.delete("/products/:id", deleteProduct);

module.exports = router;
