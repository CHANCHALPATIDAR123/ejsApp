import { response } from "express";
import viewCategory, { deleteCategory } from "../model/view.category.js";
import { editCategory } from "../model/view.category.js";// let view = new viewProduct();
// view.viewProduct()
//     .then(result => {
//         response.redirect("/admin/dashboard");
//     }).catch(err => {
//         response.end("hello")
//     });

export const viewPage1 = (request, response, next) => {
    let view = new viewCategory();
    view.view1()
        .then(result => {
            response.render("view-category.ejs", { category: result });
        }).catch(err => {
            response.end("error in v.control");
        });
};

export const deleteCat = (request, response, next) => {
    //let dele = new deleteProduct();
    const id = request.params.id

    deleteCategory.delete(parseInt(id))
        .then(result => {
            response.redirect("/category/view-category");
        }).catch(err => {
            response.end("error in delete control")
        });
};

export const editCategoryAction = (request, response, next) => {
    let { id, title } = request.body;
    //console.log(id + title);
    editCategory.edit1(id, title)

        .then(result => {
            response.redirect("/category/view-category");
        })
        .catch(err => {
            console.log(err);
        })
}

export const editCategoryPage = async (request, response, next) => {
    try {
        let categoryId = request.params.id;

        let result = await editCategory.getProductById(categoryId);
        // console.log(result[0]);
        return response.render("edit-category.ejs", { category: result[0] });
    }
    catch (err) {
        console.log(err);
    }
}