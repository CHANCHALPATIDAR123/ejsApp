import { request } from "express";
import pool from "../db/dbConfig.js";

export default class AddProduct {
    constructor(ProductId, ProductName, Price, CategoryID) {
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.Price = Price;
        this.CategoryID = CategoryID;
    }

    addProduct() {
        return new Promise((resolve, reject) => {
            // let { title, price, category } = request.body;
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "INSERT INTO product (ProductName, Price, CategoryID) VALUES (?, ?, ?)";
                    con.query(sql, [this.ProductName, this.Price, this.CategoryID], (err, result) => {
                        con.release();

                        if (!err) {
                            resolve(result);
                        }
                        else {
                            reject(err);
                        }
                    });
                }
                else {
                    reject(err);
                }
            })
        })
    }
}