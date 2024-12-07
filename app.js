import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./routes/admin.route.js";
import ProductRouter from "./routes/product.router.js";
import CategoryRouter from "./routes/category.route.js";

import session from "express-session";
// import path from "path";
// import { fileURLToPath } from "url";
// import HomeRouter from "./routes/home.route.js";
// import AboutRouter from "./routes/about.router.js";
// import ContactRouter from "./routes/contact.router.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

app.set("views engin", "ejs");
// app.use(express.static(path.join(__dirname, "public")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "shgjrewx" }));

app.use("/admin", AdminRouter);
app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);

app.listen(3000, () => {
    console.log("server on..");
})