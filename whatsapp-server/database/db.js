import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD  = process.env.DB_PASSWORD;

const url = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.k0bmskc.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;


const Connection = async ()=>{
    try {
        await mongoose.connect(url , {useUnifiedTopology: true});
    console.log("Database Connection Established");
    } catch (error) {
        console.log("Error connecting to Database" , error.message);
    }
}

export default Connection;