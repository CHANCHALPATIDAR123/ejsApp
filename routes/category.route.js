import express from "express";
import { addCategoryAction, addCategoryPage } from "../controller/category.controller.js";
import { verify } from "../middleware/auth.js";
import { editCategoryAction, editCategoryPage, viewPage1 } from "../controller/category.view.js";
import { deleteCat } from "../controller/category.view.js";
const router = express.Router();


router.get("/add-category", verify, addCategoryPage);
router.post("/add-category", verify, addCategoryAction);
router.get("/view-category", verify, viewPage1);
router.get("/delete/:id", verify, deleteCat);
router.get("/edit/:id", verify, editCategoryPage);
router.post("/edit", verify, editCategoryAction);

export default router;