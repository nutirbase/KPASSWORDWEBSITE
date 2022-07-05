require('dotenv').config();

const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit:10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database:process.env.DATABASE,
    auth_plugin:'mysql_native_password'
    });


module.exports = db;
