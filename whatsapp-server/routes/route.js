import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';
import { getConversation, newConversation } from '../controller/conversation-controller.js';
import { addNewMessage } from '../controller/message-controller.js';
const Route = express.Router();



Route.post('/add', addUser);
Route.get('/users', getUsers);

Route.post('/conversation/add', newConversation);
Route.post('/conversation/get', getConversation)

Route.post('/message/add', addNewMessage)

export default Route;