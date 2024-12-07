import { response } from "express";
import addCategory from "../model/add.category.js";
export const addCategoryPage = (request, response, next) => {
    response.render("add-category.ejs");
}

export const addCategoryAction = (request, response, next) => {
    //console.log(request.body);
    let { name } = request.body;
    // console.log(title + price + category);
    // console.log(typeof price);
    let add = new addCategory(null, name);
    add.addCategory()
        .then(result => {
            response.redirect("/category/add-category");
        }).catch(err => {
            response.end("hello")
        });
}
