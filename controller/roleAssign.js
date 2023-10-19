const connection = require('../model/dbconnect');
const Joi = require('joi')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors());


//This API for post role
const postAssignRole = (req, res) => {
    try {
        const sqlQuery = "INSERT INTO tbl_admin_role_assign (user_id, role_id) VALUES (?, ?)";
        const values = [req.params.user_id, req.params.role_id];
        connection.query(sqlQuery, values, (error, results) => {
            if (error) {
                console.error(error);
            } else {
                console.log("Data inserted successfully");
            }
        });

    } catch (error) {
        res.send(error.sqlMessage);
    }
}
///This API for delete Roles 
const deleteRoles = (req, res) => {
    try {
        let userData = req.params.role_id;
        let sqlQuery = `DELETE FROM  tbl_admin_role_assign WHERE role_id = '${userData}'`;

        connection.query(sqlQuery, function (error, result) {
            if (error) {
                console.log("error", error.sqlMessage);
            }

            else {
                if(result.affectedRows>=1){
                    res.send({message:'success'})
                }
            }
        })
    } catch (error) {
        res.send(error);
    }
}

//This API for check All Roles 
const checkRoles = (req, res) => {
    try {
        let userData = req.params.user_id;

        // let sqlQuery = "SELECT * FROM  tbl_admin_role_assign";
        let sqlQuery = `SELECT role_name, role_id from tbl_admin_roles where role_id IN(select role_id from tbl_admin_role_assign where user_id = '${userData}')`
        connection.query(sqlQuery, function (error, result) {
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
const updateAssignRole = (req, res) => {
    const userData = req.body;
    const id = req.params.role_id;

    const sqlQuery = "UPDATE  tbl_admin_role_assign SET ? WHERE role_id = ?";

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


module.exports = { postAssignRole, updateAssignRole, checkRoles, deleteRoles };