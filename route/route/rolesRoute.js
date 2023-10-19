const express = require('express');
const rolesRouter = express.Router();
const app = express();
app.use(express.json());
/**
 * @swagger
 * components:
 *   schemas:
 *     tbl_admin_roles:
 *       type: object
 *       properties:
 *         role_id:
 *           type: string
 *         role_name:
 *           type: string
 */

/**
 * @swagger
 * /role/api/admin/roles/view:
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
 *                 $ref: '#/components/schemas/tbl_admin_roles'
 */

/**
 * @swagger
 * /role/api/admin/roles/searchrole/role_name:
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
 *                 $ref: '#/components/schemas/tbl_admin_roles'
 */

/**
 * @swagger
 * /role/api/admin/roles/add:
 *   post:
 *     summary: This POST API is used to add an employee.
 *     description: This API is used to add an employee.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tbl_admin_roles'
 *     responses:
 *       200:
 *         description: Employee added successfully.
 */


/**
 * @swagger
 * /role/api/admin/roles/update_role/{role_id}:
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
 *             $ref: '#/components/schemas/tbl_admin_roles'
 *     responses:
 *       200:
 *         description: Employee status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tbl_admin_roles'
 */

const {postRoles,updateRoles,searchRoles,viewRoles} = require('../../controller/roles');

// employeeRouter.post('/api/admin/userregister',upload.single('photo'),postEmployee);
rolesRouter.post('/api/admin/roles/add', postRoles);
rolesRouter.post('/api/admin/roles/view', viewRoles);
rolesRouter.get('/api/admin/roles/searchrole/role_name', searchRoles);
rolesRouter.patch('/api/admin/roles/update_role/:role_id', updateRoles);
module.exports = rolesRouter;