import React, {useContext, useEffect, useState} from 'react'
import { Box, styled, Typography } from '@mui/material'
import {AccountContext} from '../../../context/AccountProvider'
import { getConversation, setConversation } from '../../../services/api'
import { formatDate } from '../../../utils'

const Container = styled(Box)`
display: flex;
height:50px;
margin:12px 2px;
cursor : pointer;

`

const ProfileIcon = styled('img')({
    height:"40px",
    width: "40px",
    borderRadius: "50%",
    margin: "0 18px 0 8px "
})

const SmallContainer = styled(Box)`
width:100%;
display : flex;
align-items : center;
justify-content : space-evenly;
`

const LatestMessageText = styled(Typography)`
font-size = 14px;
color: #8696a0;
`
const TimeText = styled(Typography)`
font-size : 12px;
// margin-left: auto;
margin-right : 5px;
color: #8696a0;
`


const SingleConversation = ({user}) => {

    const {setPerson, account, newMessageFlag} = useContext(AccountContext);

    const [latestMessage, setLatestMessage] = useState({});

    const setUser = async()=>{
        // function to set the persons chat in the Chat window
        setPerson(user);
        //api call to add the users conversation with the current user
        await setConversation({senderId : account.sub, receiverId : user.sub});
        
    }

    useEffect(()=>{
        const getLatetMessage = async()=>{
            let conversationDetails = await getConversation({senderId : account.sub, receiverId : user.sub});
            setLatestMessage({text : conversationDetails.latestMessage, time : formatDate(conversationDetails.updatedAt)});
        }
        getLatetMessage();
    }, [newMessageFlag]);
  return (
   <Container onClick={()=> setUser()}>
    <Box>
        <ProfileIcon src={user.picture} alt="DP" srcset="" />
    </Box>
    <Box>
        
        <SmallContainer>
        <Typography>{user.name}</Typography>
        <TimeText>{latestMessage?.time}</TimeText>
        </SmallContainer>
        <LatestMessageText>{latestMessage?.text}</LatestMessageText>

    </Box>
   </Container>
  )
}

export default SingleConversation