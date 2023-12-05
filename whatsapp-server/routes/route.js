import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';
import { getConversation, newConversation } from '../controller/conversation-controller.js';
import { addNewMessage, getMessages } from '../controller/message-controller.js';
import { uploadFile } from '../controller/fileController.js';
import upload from '../middlewares/processFile.js'
const Route = express.Router();



Route.post('/add', addUser);
Route.get('/users', getUsers);

Route.post('/conversation/add', newConversation);
Route.post('/conversation/get', getConversation)

Route.post('/message/add', addNewMessage)
Route.get('/message/get/:conv_id', getMessages)

// file upload
Route.post('/file/upload', upload.single('file'), uploadFile);

export default Route;