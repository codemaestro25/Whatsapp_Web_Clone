import axios from 'axios';


const URL = "http://localhost:8000";


export const addUser = async(data) =>{
    try {
        await axios.post(`${URL}/add`, data);  
    }
    catch (error) {
        console.log("Error in Add User API ", error.message);
    }
}

export const getUsers = async()=>{
    try {
        let response = await axios.get(`${URL}/users`);
        return response.data ; // returning the data fro mthe response object to the frontend
    } catch (error) {
        console.log("Error in getUser API ", error.message);
    }
}

export const setConversation = async(data)=>{
    try {
        await axios.post(`${URL}/conversation/add`,data);
    } catch (error) {
        console.log("Error occured to add new conversation", error.message)
    }
}

export const getConversation = async(data)=>{
    try {
        let currentConversation = await axios.post(`${URL}/conversation/get`, data);
        return currentConversation.data;
    } catch (error) {
        console.log("Error occured to get new conversation", error.message)
    }
}

export const sendMessage = async(message)=>{
    try {
        let response = await axios.post(`${URL}/message/add`, message);
        console.log(response);
    } catch (error) {
        console.log("Error occured to get new conversation", error.message)
    }
}