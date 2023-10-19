const connection = require('../model/dbconnect');
const Joi = require('joi')
const express = require('express')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors());

const employeeSchema = Joi.object({
    user_id: Joi.number().min(1).max(100).required(),
    user_name: Joi.string().min(3).max(100).required(),
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
let user = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "iramnaazkhan314@gmail.com",
        pass: "vpdb abuv jqjj ditx"
    }
})

const postEmployee = (req, res) => {
    try {
        let userData = req.body;
        const { error, value } = employeeSchema.validate(req.body);

        if (error) {
            console.log(error);
            return res.send("Invalid Request")
        }
        else {
            bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
                if (err)
                    return res.json({ Error: "Error for hassing password" })
                else {
                    const value = [
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
                        userData.status
                    ]
                    let sqlQuery = "INSERT INTO admin_users(user_id, user_name, email, password, mobile, photo, aadhar, DOJ, Qualification, DOB, address, state, city, PIN, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                    connection.query(sqlQuery, value, function (error, result) {
                        if (error) {
                            console.log("ERROR", error.sqlMessage);
                        }
                        else {
                            if (result.affectedRows > 0) {

                                // Mail start here
                                let adminMail= req.body.email;
                                let subject = "User login Successfully";
                                let mailBody = `Welcome ${req.body.user_id}!
                                use ${adminMail} as your username and password as you provided. 
                                Thank You!
                                Mobile: ${req.body.mobile},
                                Password: ${req.body.password}`;
                                let option = {
                                    from: "iramnaazkhan314@gmail.com",
                                    to: adminMail,
                                    subject: subject,
                                    text: mailBody
                                }
                                user.sendMail(option, function (err, info) {
                                    if (err) {
                                        console.log(`Fail to send mail to ${req.body.user_id}`, err);
                                    }
                                    else {
                                        console.log("email send successfully")
                                        res.send({
                                            message: "User Registration Successful"
                                        })
                                    }
                                })

                            }
                        }
                    })
                }
            })

        }
    } catch (error) {
        res.send(error.message);
    }
}


////second API

const postgetEmployee = (req, res) => {
    try {
        let userData = req.body.name;
        let sqlQuery = "SELECT user_id, user_name, email, password, mobile, photo, aadhar, DOJ, Qualification, DOB, address, state, city, PIN, status FROM admin_users";

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
        let userData = req.params.user_name;
        // let sqlQuery = "SELECT user_name, email, password, mobile, photo, aadhar, DOJ, Qualification, DOB, address, state, city, PIN, status FROM admin_users WHERE user_name =?";
        
        let sqlQuery = `SELECT user_name, email, password, mobile, photo, aadhar, DOJ, Qualification, DOB, address, state, city, PIN, status FROM admin_users WHERE user_name like('%${userData}%') || email like('%${userData}%')`;
        connection.query(sqlQuery,function (error, result) {
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
    const sqlQuery = `UPDATE admin_users SET user_name = ?, email = ?, password = ?, mobile = ?, photo = ?, aadhar = ?, DOJ = ?, Qualification = ?, DOB = ?, address = ?, state = ?, city = ?, PIN = ?, status = ? WHERE user_id = ? `;

    const values = [
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
        userData.status,
        id 
    ];

    connection.query(sqlQuery, values, function (error, result) {
        if (error) {
            console.error("Error updating user:", error);
            res.status(500).json({ error: "An error occurred while updating user data." });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ message: "Success" });
            } else {
                res.status(404).json({ error: "User not found or no changes made." });
            }
        }
    });
};


module.exports = { postgetEmployee, postEmployee, updateEmployee, getlistEmployee, updateStatusEmployee };