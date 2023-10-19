const express = require('express');
const rolesAssignRouter = express.Router();
const app = express();
app.use(express.json());
/**
 * @swagger
 * components:
 *   schemas:
 *     tbl_admin_role_assign:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *         role_id:
 *           type: string
 */

/**
 * @swagger
 * /assign/api/admin/role/assign/postrole:
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
 *                 $ref: '#/components/schemas/tbl_admin_role_assign'
 */

/**
 * @swagger
 * /assign/api/admin/role/assign/checkrole:
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
 *                 $ref: '#/components/schemas/tbl_admin_role_assign'
 */

/**
 * @swagger
 * /assign/api/admin/roles/update_role/{role_id}:
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
 *             $ref: '#/components/schemas/tbl_admin_role_assign'
 *     responses:
 *       200:
 *         description: Employee status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tbl_admin_role_assign'
 */

/**
 * @swagger
 * 
 *   /assign/api/admin/role/assign/revokerole/{role_id}:
 *     delete:
 *       summary: Delete Role
 *       description: Delete an role record by role_id.
 *       parameters:
 *         - in: path
 *           name: emp_id
 *           required: true
 *           description: ID of the role to delete.
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: role deleted successfully.
 */



const {postAssignRole,updateAssignRole,checkRoles,deleteRoles} = require('../../controller/roleAssign');

rolesAssignRouter.post('/api/admin/role/assign/postrole/:role_id/:user_id', postAssignRole);
rolesAssignRouter.delete('/api/admin/role/assign/revokerole/:role_id', deleteRoles);
rolesAssignRouter.get('/api/admin/role/assign/checkrole/:user_id', checkRoles);
rolesAssignRouter.patch('/api/admin/roles/update_role/:role_id', updateAssignRole);

module.exports = rolesAssignRouter;