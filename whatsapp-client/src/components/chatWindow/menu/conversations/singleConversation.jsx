import React, {useContext} from 'react'
import { Box, styled, Typography } from '@mui/material'
import {AccountContext} from '../../../context/AccountProvider'
import { setConversation } from '../../../services/api'

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




const SingleConversation = ({user}) => {

    const {setPerson, account} = useContext(AccountContext);

    const setUser = async()=>{
        // function to set the persons chat in the Chat window
        setPerson(user);
        //api call to add the users conversation with the current user
        await setConversation({senderId : account.sub, receiverId : user.sub});
        
    }
  return (
   <Container onClick={()=> setUser()}>
    <Box>
        <ProfileIcon src={user.picture} alt="DP" srcset="" />
    </Box>
    <Box>
        <Typography>{user.name}</Typography>
    </Box>
   </Container>
  )
}

export default SingleConversation