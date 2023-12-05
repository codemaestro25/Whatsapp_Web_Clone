import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import Footer from './Footer';
import { AccountContext } from '../../context/AccountProvider';
import { getConversation } from '../../services/api';
import { Box } from '@mui/material';


const Chat = () => {
  const [messageText, setMessageText] = useState('');
  const [conversationDetails, setConversationDetails] = useState({})

  const {account, person} = useContext(AccountContext);

  useEffect(()=>{
   const getConversationDetails = async()=>{
    const data = await getConversation({senderId : account.sub, receiverId : person.sub})
    setConversationDetails(data);
   } 
   getConversationDetails();
  },[person.sub]);


  return (
   <Box>
   <ChatHeader />
   <ChatBody conversationDetails={conversationDetails} />
   <Footer messageText={messageText} setMessageText={setMessageText} conversationDetails ={conversationDetails}/>
   </Box>
  )
}

export default Chat;