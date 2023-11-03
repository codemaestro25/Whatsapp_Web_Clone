import React, { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import { styled , Box, Typography } from '@mui/material';


const ProfileImage = styled('img')({
    height:"200px",
    width:"200px",
    borderRadius : "50%",
    margin: "50px auto"
})


const NameContainer = styled(Box)`
background-color: #FFFFFF;
padding : 12px 15px 14px 20px;
box-shadow: 0 1px 3px rgba(0,0,0,0.09);
& :first-child{
    font-size: 14px;
    color: #009688;
    font-weight:150;
}

& :last-child{
    font-size: 18px;
    padding-top: 13px ;
    color: #4A4A4A;
}

`

const TextContainer = styled(Box)`
color: #8696a0;
padding: 15px 20px 28px 20px;
`







const Profile = () => {
     const {account }= useContext(AccountContext);
  return (
  <>

    <ProfileImage src={account.picture} alt="Profile Photo" srcset="" />

    <NameContainer>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>

    </NameContainer>
    <TextContainer>
        <Typography>
            This name is not your username or pin. This name will be visible to your WhatsApp contacts
        </Typography>
    </TextContainer>
    <NameContainer>
        <Typography>Email</Typography>
        <Typography>{account.email}</Typography>

    </NameContainer>

  </>
  )
}

export default Profile