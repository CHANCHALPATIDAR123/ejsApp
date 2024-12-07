import viewProduct from "../model/view.product.js";
import { editProduct } from "../model/view.product.js";

import { deleteProduct } from "../model/view.product.js"
//import { editProductAction, editProductPage } from "../model/view.product.js";
export const viewPage = (request, response, next) => {
    let view = new viewProduct();
    view.view()
        .then(result => {
            response.render("view-product.ejs", { product: result });
        }).catch(err => {
            response.end("error in v.control")
        });
};

export const deletePro = (request, response, next) => {
    //let dele = new deleteProduct();
    const id = request.params.id

    deleteProduct.delete(parseInt(id))
        .then(result => {
            response.redirect("/product/view-product");
        }).catch(err => {
            response.end("error in v.control")
        });
};

// export const editProductAction = (request, response, next) => {
//     let { id, title, price } = request.body;
//     //let p = new editProduct(id, title, price);
//     editProduct.edit(id)
//         .then(result => {
//             response.redirect("/product/view-product");
//         }).catch(err => {
//             console.log(err);
//         })
// }

export const editProductAction = (request, response, next) => {
    let { id, title, price } = request.body;
    editProduct.edit(id, title, price)
        .then(result => {
            response.redirect("/product/view-product");
        }).catch(err => {
            console.log(err);
            response.end("Error updating product.");
        });
};


export const editProductPage = async (request, response, next) => {
    try {
        let productId = request.params.id;

        let result = await editProduct.getProductById(productId);
        // console.log(result[0]);
        return response.render("edit-product.ejs", { product: result[0] });
    }
    catch (err) {
        console.log(err);
    }
}