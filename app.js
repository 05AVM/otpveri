require ('dotenv').config();
require("./db");
//console.log(process.env.DB);
//console.log(process.env.TOKEN_KEY);
//console.log(process.env.TOKEN_EXPIRY);
const express = require('express');
const bodyParser = express.json;
//This enables us to supply json input values to our server requests
const app = express();
const cors= require("cors");
//cors is needed to make request to the backend API for standard applications

const routes=require("../server/routes")
//const connecttodb=require("./db");

//database cnnection


// middlewares

app.use(express.json());
app.use(cors());
app.use(bodyParser());
app.use("/api/v1",routes);

const port=process.env.PORT || 4000;
app.listen(port,()=>console.log(`Listening on port ${port}`))

//jsonwebtoken to authenticate users
//joi joi password complexity --validate the data sent by the user
//Joi is a JavaScript library used for object schema validation. When talking about password complexity in the context of Joi, it means defining a schema for the password and specifying certain rules or constraints that the password must adhere to. These rules are typically designed to enhance the security of passwords by enforcing complexity requirements.