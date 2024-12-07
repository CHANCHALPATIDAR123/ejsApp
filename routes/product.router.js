import express from "express";
import { addProductAction, addProductPage } from "../controller/product.controller.js";
import { verify } from "../middleware/auth.js";
import { viewPage } from "../controller/view.controller.js";
import { deletePro } from "../controller/view.controller.js";
import { editProductAction, editProductPage } from "../controller/view.controller.js";

const router = express.Router();

router.get("/add-product", verify, addProductPage);
router.post("/add-product", verify, addProductAction);
router.get("/view-product", verify, viewPage);
router.get("/delete/:id", verify, deletePro);
router.post("/edit", verify, editProductAction);
router.get("/edit/:id", verify, editProductPage);
// router.post("/edit-product",verify,editProductAction);

export default router;