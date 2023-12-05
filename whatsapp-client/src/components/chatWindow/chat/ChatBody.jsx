import React, { useState , useEffect, useContext, useRef } from 'react'
import {Box, styled} from "@mui/material"
import { getMessages } from '../../services/api'
import SIngleMessage from './SIngleMessage'
import { AccountContext } from '../../context/AccountProvider'

const Container = styled(Box)`
background-image : url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
background-size : 50%;

`

const MessageContent = styled(Box)`
height : 80vh;
overflow:auto;
width:100%;
`

const MessageContainer = styled(Box)`
padding: 0 20px;
margin: 6px 0;
`

const ChatBody = ({conversationDetails }) => {

  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [incomingMessage, setIncomingMessage] = useState({})
  const {newMessageFlag, socket} = useContext(AccountContext)


  // for fetching realtime message using socket;
  useEffect(()=>{
    socket.current.on("getMessage", messageData => {
      setIncomingMessage({
        ...messageData,
        createdAt : Date.now()
      })
    })
  },[])


  // for fetching the message everytime the user click on the conversation
  useEffect(()=>{
    const getMessageFromDb = async()=>{
      // setMessages([])
      let messagesData = await getMessages(conversationDetails._id)
      // console.log(messages);
      setMessages(messagesData);
    }
    
    conversationDetails._id && getMessageFromDb();
  },[conversationDetails._id, newMessageFlag]);

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition: "smooth"}); //to automatically scroll to the bottom on incoming of new meessage
  }, [messages])

  useEffect(()=>{
    incomingMessage && conversationDetails?.members?.includes(incomingMessage.senderId) && 
    setMessages((prev) =>
     [ ...prev, incomingMessage]
    );
  }, [incomingMessage, conversationDetails])

  return (
    
    <Container>
      <MessageContent>
        {
          messages && messages.map(message => 
        
          <MessageContainer ref = {scrollRef}>
            <SIngleMessage message={message}  />
          </MessageContainer>
        )
        }
      </MessageContent>

    </Container>
  )
}

export default ChatBody