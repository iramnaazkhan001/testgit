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
    apis: ['./route/route/employeeRoute.js']
}

const employeeRouter = require('./route/route/employeeRoute');
app.use('/', employeeRouter);

app.use('/project', swaggerUi.serve, swaggerUi.setup(swaggerjsdoc(option)));

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
})