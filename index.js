const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const swaggerUi = require('swagger-ui-express')
const swaggerjsdoc = require('swagger-jsdoc')
const cors = require('cors')
app.use(cors());
const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "NODE JS API DOCUMENTATION",
            version: "1.0.0",
            description: 'API documentation for the User API',
        },
        server: [
            {
                url: 'http://localhost:6767'
            }
        ]
    },
    apis: ['./route/route/usersRoute.js','./route/route/rolesRoute.js','./route/route/roleAssignRoute.js']
    
}

const employeeRouter = require('./route/route/usersRoute');
//Route Location
const rolesRouter = require('./route/route/rolesRoute')
const rolesAssignRouter = require('./route/route/roleAssignRoute')
const categoryRouter = require('./route/route/categoryRoute')
const offersRouter = require('./route/route/offersRoute')
const subcategoryRouter = require('./route/route/subCategoryRoute')
app.use('/', employeeRouter);

//use for role Routes
app.use('/role', rolesRouter);

//use for assign role Routes
app.use('/assign',rolesAssignRouter)

// use for category Routes
app.use('/category',categoryRouter)

//use for offers Routes
app.use('/offers',offersRouter)

//use for subcategory Routes
app.use('/subcat',subcategoryRouter)

//for swagger
app.use('/project', swaggerUi.serve, swaggerUi.setup(swaggerjsdoc(option)));

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
})