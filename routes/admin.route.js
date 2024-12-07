import express from "express";
import { logInPageInPage, signInAction, dashboardPageAction } from "../controller/admin.controller.js";
import { verify } from "../middleware/auth.js";

const router = express.Router();

router.get("/login", logInPageInPage);
router.post("/login", signInAction);
router.get("/dashboard", verify, dashboardPageAction);
export default router;