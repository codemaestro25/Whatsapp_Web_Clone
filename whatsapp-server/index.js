import express from "express";
import Connection from "./database/db.js";
import Route from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";


const app =express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Route); //routes all the api calls to '/' to route.js

Connection();

const PORT = 8000;

app.listen(PORT, ()=> console.log(`Whatsapp Backend server running on port: ${PORT}` ));
