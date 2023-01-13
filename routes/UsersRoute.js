const { Router } = require("express");
const UsersController = require("../controllers/UsersController");

// Initialization
const router = Router();

router.get("/", UsersController.getUsers);
router.post("/", UsersController.Auth);
//router.get("/products/:id", getProductById);
// router.post("/products", saveProduct);
// router.patch("/products/:id", updateProduct);
// router.delete("/products/:id", deleteProduct);

module.exports = router;
