const express = require('express');
const subcategoryRouter = express.Router();
const app = express();
app.use(express.json());

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

const {addsubCategory,updatesubCategory,findsubCategory,getsubCategory} = require('../../controller/subCategory');

subcategoryRouter.post('/api/admin/subcategory/addsubcat/:pcategory_id',upload.single('photo'),addsubCategory);  //add
subcategoryRouter.post('/api/admin/subcategory/viewsubcat', getsubCategory);  //post for get data
subcategoryRouter.get('/api/admin/subcategory/findsubcategory/:subcategory_name', findsubCategory); //get
subcategoryRouter.patch('/api/admin/subcategory/updatesubcategory/:subcategory_id',upload.single('photo'), updatesubCategory); //update
module.exports = subcategoryRouter;