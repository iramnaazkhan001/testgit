const mysql = require('mysql');
const connection = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: "",
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})
connection.connect(function (err) {
    if (err) {
        console.log("Error", err.sqlMessage);
    }
    else {
        console.log("Connection Established...");
    }
})
module.exports = connection;