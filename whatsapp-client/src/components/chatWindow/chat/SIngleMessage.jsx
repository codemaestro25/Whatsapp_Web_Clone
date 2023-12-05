import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { formatDate } from '../../utils'
import { AccountContext } from '../../context/AccountProvider'

const SenderContainer = styled(Box)`
background-color: #dcf8c6;
border-radius : 6px;
margin-left:auto;
word-break: break-word;
padding: 5px;
max-width:60%;
width:fit-content;
display : flex;
align-items: center;
`

const ReceiverContainer = styled(Box)`
background-color: #FFFFFF;
border-radius : 6px;
word-break: break-word;
padding: 5px;
max-width:60%;
width:fit-content;
display : flex;
align-items: center;
`

const MessageText = styled(Typography)`
font-size : 1rem;
padding : 0 12px;
`

const TimeText = styled(Typography)`
color : #919191;
word-break : keep-all;
font-size: 10px;
margin-top:auto;
`


const SIngleMessage = ({message}) => {
  
  const {account} = useContext(AccountContext);

  return (
    <>
    {account.sub === message.senderId?
    <SenderContainer>
     <MessageText>
     {message.message}
     </MessageText>
    <TimeText>
      {formatDate(message.createdAt)}
    </TimeText>
    </SenderContainer> 
    :  <ReceiverContainer>
    <MessageText>
     {message.message}
     </MessageText>
    <TimeText>
      {formatDate(message.createdAt)}
    </TimeText>
    </ReceiverContainer>}  
   
    </>
  )
}

export default SIngleMessage