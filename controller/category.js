const connection = require('../model/dbconnect');
const Joi = require('joi')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors());

const addCategory=(req,res)=>{

    const data={
        pcategory_id :req.body.pcategory_id ,
        category_name :req.body.category_name
    }

    const SqlQuery='INSERT INTO tbl_admin_product_category SET ?'
    connection.query(SqlQuery,data,(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}

const getCategory=(req,res)=>{
    const SqlQuery="SELECT * FROM tbl_admin_product_category"
    connection.query(SqlQuery,(error,results)=>{
            if(error){
                res.json(err)
            }
            else{
                res.json(results)
            }
    })
}

const updateCategory=(req,res)=>{
    const id=req.params.pcategory_id
    const data=req.body
    const SqlQuery='UPDATE tbl_admin_product_category SET ? WHERE pcategory_id=? '
    connection.query(SqlQuery,[data,id], (err, result)=> {
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}

const findCategory=(req,res)=>{
    const categoryname=req.params.name
    const SqlQuery='SELECT category_name FROM tbl_admin_product_category'
    connection.query(SqlQuery,categoryname,(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}
module.exports={addCategory,getCategory,updateCategory,findCategory}