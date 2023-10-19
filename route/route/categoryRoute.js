const express = require('express');
const categoryRouter = express.Router();
const app = express();
app.use(express.json());


const {addCategory,updateCategory,findCategory,getCategory} = require('../../controller/category');

categoryRouter.post('/api/admin/category/add', addCategory);
categoryRouter.post('/api/admin/category/view', getCategory);
categoryRouter.get('/api/admin/category/findcategory/category_name', findCategory);
categoryRouter.patch('/api/admin/category/updatecategory/:pcategory_id', updateCategory);
module.exports = categoryRouter;