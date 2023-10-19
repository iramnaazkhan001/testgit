const connection = require('../model/dbconnect');
const Joi = require('joi')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors());


const addsubCategory = (req, res) => {
    console.log(req.params.pcategory_id)
    const data = {
        pcategory_id: req.params.pcategory_id,
        subcategory_id: req.body.subcategory_id,
        subcategory_name: req.body.subcategory_name,
        photo: req.file.location
    };
    const sqlQuery = 'INSERT INTO tbl_admin_subcategory (pcategory_id, subcategory_id, subcategory_name, photo) VALUES (?, ?, ?, ?)';
    const values = [data.pcategory_id, data.subcategory_id, data.subcategory_name, data.photo];

    connection.query(sqlQuery, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error adding subcategory' });
        } else {
            res.status(201).json({ message: 'Subcategory added successfully' });
        }
    });
};

const getsubCategory = (req, res) => {
    const sqlQuery = "SELECT subcategory_id, subcategory_name, photo, added_on FROM tbl_admin_subcategory";
    
    connection.query(sqlQuery, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching subcategories' });
        } else {
            res.status(200).json(results);
        }
    });
};

const updatesubCategory = (req, res) => {
    const data = {
        subcaregory_id:req.params.subcategory_id,
        subcategory_name: req.body.subcategory_name,
        photo: req.file.location
    };
    const SqlQuery = `UPDATE tbl_admin_subcategory SET subcategory_name =?, photo=? WHERE subcategory_id ="${req.params.subcategory_id}"`
    const values = [ data.subcategory_name, data.photo];
    connection.query(SqlQuery,  values, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}

const findsubCategory = (req, res) => {
    const subcategoryname = req.params.subcategory_name
    const SqlQuery = `SELECT subcategory_id, subcategory_name, photo, added_on FROM tbl_admin_subcategory WHERE subcategory_name='${subcategoryname}'`
    connection.query(SqlQuery, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}


module.exports = { addsubCategory, updatesubCategory, findsubCategory, getsubCategory }