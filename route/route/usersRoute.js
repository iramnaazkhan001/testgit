const express = require('express');
const employeeRouter = express.Router();
const aws = require('aws-sdk')
const multerS3 = require('multer-s3')
const multer = require('multer')

const bucketName ="tpbazar"
const s3 = new aws.S3({
    region:'ap-south-1',
    credentials:{
        secretAccessKey:process.env.SECRET_ACCESS_KEY,
        accessKeyId:process.env.ACCESS_KEY_ID,
    }
 })
 let storage=multerS3({
    s3 : s3,
    bucket:bucketName,
    acl:"public-read",
    metadata: (req, file, cb)=>{
        cb(null,{fieldName: file.fieldname})
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key:(req,file,cb)=>{
        cb(null,file.originalname)
    },
})
let upload = multer({storage:storage})


/**
 * @swagger
 * components:
 *   schemas:
 *     admin_users:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *         user_name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         mobile:
 *           type: number
 *         photo:
 *           type: string
 *         aadhar:
 *           type: number
 *         DOJ:
 *           type: string
 *         Qualification:
 *           type: string
 *         DOB:
 *           type: string
 *         address:
 *           type: string
 *         state:
 *           type: string
 *         city:
 *           type: string
 *         PIN:
 *           type: number
 *         status:
 *           type: string
 */

/**
 * @swagger
 * /api/userlist:
 *   post:
 *     summary: This GET API is used to check if the GET method is working or not.
 *     description: This API is used to check if the GET method is working or not.
 *     responses:
 *       200:
 *         description: Testing the GET method.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/admin_users'
 */

/**
 * @swagger
 * /api/admin/userfind/:user_name:
 *   get:
 *     summary: This GET API is used to check if the GET method is working or not.
 *     description: This API is used to check if the GET method is working or not.
 *     responses:
 *       200:
 *         description: Testing the GET method.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/admin_users'
 */

/**
 * @swagger
 * /api/admin/userregister:
 *   post:
 *     summary: This POST API is used to add an employee.
 *     description: This API is used to add an employee.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin_users'
 *     responses:
 *       200:
 *         description: Employee added successfully.
 */

/**
 * @swagger
 * /api/admin/userupdate/{user_id}:
 *   patch:
 *     summary: This patch API is used to update an employee's status.
 *     description: This API is used to update an employee's status.
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: ID of the employee to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin_users'
 *     responses:
 *       200:
 *         description: Employee status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/admin_users'
 */



/**
 * @swagger
 * /api/admin/status/{user_id}:
 *   patch:
 *     summary: This patch API is used to update an employee's status.
 *     description: This API is used to update an employee's status.
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: ID of the employee to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin_users'
 *     responses:
 *       200:
 *         description: Employee status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/admin_users'
 */

const { postgetEmployee, postEmployee,getlistEmployee, updateEmployee, updateStatusEmployee } = require('../../controller/users');

employeeRouter.post('/api/admin/userregister',upload.single('photo'), postEmployee);
employeeRouter.get('/api/admin/userfind/:user_name', getlistEmployee);
employeeRouter.post('/api/userlist', postgetEmployee);
employeeRouter.patch('/api/admin/userupdate/:user_id',upload.single('photo'), updateEmployee);
employeeRouter.patch('/api/admin/status/:user_id', updateStatusEmployee);

module.exports = employeeRouter;