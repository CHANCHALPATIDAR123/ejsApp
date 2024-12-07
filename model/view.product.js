import pool from "../db/dbConfig.js";

export default class viewProduct {
    view() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "SELECT * FROM product";
                    con.query(sql, (err, results) => {
                        con.release();
                        if (!err) {
                            resolve(results)
                        } else {
                            reject(err)
                            console.log(err);
                            response.end("Error fetching product.");
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

export class deleteProduct {
    static delete(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "DELETE FROM product WHERE ProductID = ?";
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

// export class editProduct {
//     static edit(id) {
//         return new Promise((resolve, reject) => {
//             pool.getConnection((err, con) => {
//                 if (!err) {
//                     let sql = "update product set ProductName=?,Price=? where ProductID = ?";
//                     con.query(sql, [ProductName, Price, ProductID], (err, results) => {
//                         con.release();
//                         if (!err) {
//                             resolve(results);
//                         } else {
//                             reject(err);
//                             console.error(err);
//                         }
//                     });
//                 } else {
//                     console.error(err);
//                     reject(new Error("Database connection error."));
//                 }
//             });
//         });
//     }
//     static getProduct() {
//         return new Promise((resolve, reject) => {
//             pool.getConnection((err, con) => {
//                 if (!err) {
//                     let sql = "select * from product";
//                     con.query(sql, (err, result) => {
//                         err ? reject(err) : resolve(result);
//                         con.release();
//                     });
//                 }
//                 else
//                     reject(err);
//             })
//         });
//     }

//     static getProductById(id) {
//         return new Promise((resolve, reject) => {
//             pool.getConnection((err, con) => {
//                 if (!err) {
//                     let sql = "select * from product where ProductID = ?";
//                     con.query(sql, [id], (err, result) => {
//                         err ? reject(err) : resolve(result);
//                         con.release();
//                     });
//                 }
//                 else
//                     reject(err);
//             })
//         });
//     }
// }

export class editProduct {
    static edit(id, ProductName, Price) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "UPDATE product SET ProductName = ?, Price = ? WHERE ProductID = ?";
                    con.query(sql, [ProductName, Price, id], (err, results) => {
                        con.release();
                        if (!err) {
                            resolve(results);
                            // console.log(results);
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

    static getProductById(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (!err) {
                    let sql = "SELECT * FROM product WHERE ProductID = ?";
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
