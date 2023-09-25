const Joi = require('joi');
const connection = require('../model/dbconnect');
const joi = require('joi')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors());

const employeeSchema = joi.object({
    user_id: Joi.number().min(1).max(100).required(),
    user_name: joi.string().min(3).max(100).required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    mobile: Joi.number().required(),
    photo: Joi.string(),
    aadhar: Joi.number().required(),
    DOJ: Joi.string().required(),
    Qualification: Joi.string().required(),
    DOB: Joi.string().required(),
    address: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    PIN: Joi.number().required(),
    status: Joi.string().required(),
})
/////first API

const postEmployee = (req, res) => {
    try {
        let userData = req.body;
        const { error, value } = employeeSchema.validate(req.body);

        if (error) {
            console.log(error);
            return res.send("Invalid request....")
        }
        res.send("Successfully enter");
        console.log(userData);

        let sqlQuery = "INSERT INTO admin_users(user_id, user_name, email, password, mobile, photo, aadhar, DOJ, Qualification, DOB, address, state, city, PIN, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        connection.query(sqlQuery, [
            userData.user_id,
            userData.user_name,
            userData.email,
            userData.password,
            userData.mobile,
            req.file.location,
            userData.aadhar,
            userData.DOJ,
            userData.Qualification,
            userData.DOB,
            userData.address,
            userData.state,
            userData.city,
            userData.PIN,
            userData.status], function (error, result) {
                if (error) {
                    console.log("ERROR", error.sqlMessage);
                }
                else {
                    res.json(result);
                }
            })

    } catch (error) {
        res.send(error.sqlMessage);
    }
}

////second API

const postgetEmployee = (req, res) => {
    try {
        let userData = req.body.name;
        let sqlQuery = "SELECT * FROM admin_users";

        connection.query(sqlQuery, userData, function (error, result) {
            if (error) {
                console.log("error", error.sqlMessage);
            }
            else {
                res.json(result)
            }
        })
    } catch (error) {
        res.send(error.sqlMessage);
    }
}
//third API
const getlistEmployee = (req, res) => {
    try {
        let userData = req.body.user_name;
        let sqlQuery = "SELECT user_name FROM admin_users";

        connection.query(sqlQuery, userData, function (error, result) {
            if (error) {
                console.log("error", error.sqlMessage);
            }
            else {
                res.json(result)
            }
        })
    } catch (error) {
        res.send(error.sqlMessage);
    }
}

///forth API   

const updateStatusEmployee = (req, res) => {
    try {

        let id = req.params.user_id;
        let status = req.body.status;
console.log(id)
        let sqlQuery = `UPDATE admin_users SET status = ? Where user_id = ${id}`
        connection.query(sqlQuery, status, function (error, result) {
            if (error) {
                console.log("ERROR", error.sqlMessage);
            }
            else {
                res.json(result);
            }
        })

    } catch (error) {
        res.send(error.sqlMessage);
    }
}

////fifth API
const updateEmployee = (req, res) => {
    const userData = req.body;
    const id = req.params.user_id;

    const sqlQuery = "UPDATE admin_users SET ? WHERE user_id = ?";
    
    connection.query(sqlQuery, [userData, id], function (error, result) {
        if (error) {
            console.error("Error updating employee:", error);
            res.status(500).json({ error: "An error occurred while updating employee data." });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ message: "Employee data updated successfully." });
            } else {
                res.status(404).json({ error: "Employee not found or no changes made." });
            }
        }
    });
};


module.exports = { postgetEmployee, postEmployee, updateEmployee, getlistEmployee, updateStatusEmployee };