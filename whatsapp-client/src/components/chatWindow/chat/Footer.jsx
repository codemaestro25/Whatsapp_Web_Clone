import { Box, styled, InputBase } from '@mui/material'
import React, { useContext } from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Mic } from '@mui/icons-material';
import { AccountContext } from '../../context/AccountProvider';
import { sendMessage } from '../../services/api';


const Wrapper = styled(Box)`
display : flex;
align-items : center;
padding : 0px 20px;
background-color : #ededed;
height : 55px;
width : 100%;
& > svg {
  font-size : 25px;
  padding : 0px 8px;
}

& :nth-child(2){
  transform : rotate(45deg);
}
`

const InputContainer = styled(Box)`
width : calc(94% - 100px);

`

const InputField = styled(InputBase)`
background-color : #fff;
width : 100%;
border-radius : 20px;
padding : 0 15px;

`

const Footer = ({messageText, setMessageText, conversationDetails}) => {

  const {person , account} = useContext(AccountContext)

  const handleSendMessage = async(e)=>{
    if(e.which===13){
      let message = {
        senderId : account.sub,
        receiverId : person.sub,
        conversationId : conversationDetails._id,
        type: "text",
        message: messageText
      }

      await sendMessage(message);

      // resetting the message
      setMessageText('');
    }

  }

  return (
   <Wrapper>
    <InsertEmoticonIcon />
    <AttachFileIcon  />
   <InputContainer>
    <InputField  placeholder='Type your message here' onChange={(e)=>setMessageText(e.target.value)} onKeyPress={handleSendMessage} value={messageText}/>
   </InputContainer>
   <Mic />


   </Wrapper>
  )
}

export default Footer