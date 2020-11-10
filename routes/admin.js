const express = require("express");
const path = require("path");
const { title } = require("process");

const rootDir = require("../util/path");
const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);
router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

module.exports = router;