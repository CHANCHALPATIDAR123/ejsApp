import pool from "../db/dbConfig.js";

export default class viewCategory {
    view1() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "SELECT * FROM category";
                    con.query(sql, (err, results) => {
                        con.release();
                        if (!err) {
                            resolve(results)
                        } else {
                            reject(err)
                            console.log(err);
                            response.end("Error fetching category.");
                        }
                    });
                } else {
                    console.log(err);
                    response.end("Database connection error.");
                }
            });

        })
    }
}
export class deleteCategory {
    static delete(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "DELETE FROM category WHERE id = ?";
                    con.query(sql, [id], (err, results) => {
                        con.release();
                        if (!err) {
                            resolve(results);
                        } else {
                            reject(err);
                            console.error(err);
                        }
                    });
                } else {
                    console.error(err);
                    reject(new Error("Database connection error."));
                }
            });
        });
    }
}

export class editCategory {
    static edit1(id, name) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "UPDATE category SET name = ? WHERE id = ?";
                    con.query(sql, [name, id], (err, result) => {
                        con.release();
                        resolve(result);
                    })
                }
                else {
                    reject("something is wrong.....");
                }
            })
        })
    }

    static getProductById(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "SELECT * FROM category WHERE id = ?";
                    con.query(sql, [id], (err, result) => {
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                } else {
                    reject(err);
                }
            });
        });
    }
}