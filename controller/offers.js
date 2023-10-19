const connection = require('../model/dbconnect');
const Joi = require('joi')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors());

const createOffers= (req, res) => {
    try {
        let data = req.body
        // console.log(data)
        let SqlQuery = "INSERT INTO tbl_admin_offers SET ?"
            connection.query(SqlQuery, data, (err, result) => {
                if (err) {
                    res.json(err)
                }
                else {
                    res.json(result)
                }
            })
      
    } catch (error) {

    }

}
const viewOffers= (req, res) => {
    try {
        let SqlQuery = "SELECT offer_name, percentage_discount, flat_discount, upto_discount, validfrom, validto, terms_and_condition, status FROM tbl_admin_offers"
      
            connection.query(SqlQuery,(err, result) => {
                if (err) {
                    res.json(err)
                }
                else {
                    res.json(result)
                }
                
            })
      
    } catch (error) {
        res.send(error)
    }

}

const updateOffers=(req,res)=>{
    try {
        const data=req.body
        const id=req.params.offer_id
        const SqlQuery=`UPDATE tbl_admin_offers SET ? WHERE offer_id = '${id}'` 
        connection.query(SqlQuery,data,(err,result)=>{
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })
    } catch (error) {
        res.send(error)
    }
}

const updateStatus=(req,res)=>{
    try {
        const offerid=req.params.offer_id
        const status=req.body
        const SqlQuery='UPDATE tbl_admin_offers SET status =? WHERE offer_id=?'

        connection.query(SqlQuery,[status,offerid],(err,result)=>{
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })
    } catch (error) {
        res.send(error)
    }
}
const findOffers=(req,res)=>{
    try {
        const discount=req.params.percentage_discount
console.log(discount)
        // const SqlQuery='SELECT * FROM tbl_admin_offers WHERE percentage_discount=? OR flat_discount=? OR upto_discount=?'
        const SqlQuery=`SELECT offer_name, percentage_discount, flat_discount, upto_discount, validfrom, validto, terms_and_condition, status FROM tbl_admin_offers WHERE percentage_discount like('%${discount}%')`
        connection.query(SqlQuery,discount,(err,result)=>{
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })
    } catch (error) {
        res.send(error)
    }
}
module.exports={createOffers,viewOffers,updateOffers,updateStatus,findOffers}