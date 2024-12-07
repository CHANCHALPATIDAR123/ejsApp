import { request } from "express";
import pool from "../db/dbConfig.js";

export default class addCategory {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    addCategory() {
        return new Promise((resolve, reject) => {
            // let { title, price, category } = request.body;
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "INSERT INTO category (name) VALUES (?)";
                    con.query(sql, [this.name], (err, result) => {
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