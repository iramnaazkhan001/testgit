const connection = require('../model/dbconnect');
const Joi = require('joi')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors());

//Validation for tbl_admin_roles
const employeeSchema = Joi.object({
    role_id: Joi.string().min(1).max(100).required(),
    role_name: Joi.string().min(2).max(100).required(),
 
})
//This API for post role
const postRoles = (req, res) => {
    try {
        let roleData = req.body;
        const { error, value } = employeeSchema.validate(req.body);
        if (error) {
            console.log(error);
            return res.json({
                status:"Invalid request...."})
        }
        res.json("Successfully enter");
        console.log(roleData);

        let sqlQuery = "INSERT INTO tbl_admin_roles(role_id, role_name) VALUES(?, ?)";

        connection.query(sqlQuery,[roleData.role_id,
        roleData.role_name],function (error, result) {
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
///This API for search Roles 
const searchRoles = (req, res) => {
    try {
        let userData = req.body.role_name;
        let sqlQuery = "SELECT role_name FROM tbl_admin_roles";

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

//This API for View All Roles 
const viewRoles = (req, res) => {
    try {
        let userData = req.body.role_name;
        let sqlQuery = "SELECT role_id,role_name FROM tbl_admin_roles";

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
//This API for Update Roles
const updateRoles = (req, res) => {
    const userData = req.body;
    const id = req.params.role_id;

    const sqlQuery = "UPDATE tbl_admin_roles SET ? WHERE role_id = ?";
    
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


module.exports = {postRoles,updateRoles,searchRoles,viewRoles };