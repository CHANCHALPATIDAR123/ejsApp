
import AddProduct from "../model/add.product.js";
export const addProductPage = (request, response, next) => {
    response.render("add-product.ejs");
}

export const addProductAction = (request, response, next) => {
    //console.log(request.body);
    let { title, price, category } = request.body;
    // console.log(title + price + category);
    // console.log(typeof price);
    let add = new AddProduct(null, title, parseFloat(price), parseInt(category));
    add.addProduct()
        .then(result => {
            response.redirect("/product/add-product");
        }).catch(err => {
            response.end("hello")
        });
}
