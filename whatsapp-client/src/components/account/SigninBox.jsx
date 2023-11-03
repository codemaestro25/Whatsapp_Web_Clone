import React from 'react'
import { useContext } from 'react';
import { Dialog, ListItem ,List, Typography , Box, styled} from '@mui/material'
import { AccountContext } from '../context/AccountProvider';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { addUser } from '../services/api.js';




// using object type css and passing it to the paper props
const dialogStyle = {
    height: '90%',
    marginTop : '13%',
    width: '60%',
    maxWidth : '100%',
    boxShadow : 'none',
    overflow : 'hidden'
}

const Container = styled(Box)`
display : flex;
justify-content : space-between;
align-items : space-between;
padding : 50px;
`

const Title = styled(Typography)`
font-size : 30px;
font-family : inherit;
font-weight : 10;
margin-top : 20px;
margin-bottom : 50px;
`

// const QRCode = styled('img')({
//     height: 256,
//     width : 256,
//     marginTop: 20,
// })

const StyledList = styled(List)`
& > li {
    margin-top: 10px;
    line-height : 20px;
    font-size : 20px;
    color : #4a4a4a;

}
`

const SigninBox = () => {

    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess = (res)=>{
            const decoded = jwtDecode(res.credential);
            setAccount(decoded);
            addUser(decoded);

        

    }


    const onLoginError = (res) =>{
        console.log(res);
        console.log("Login Failed!")
    }


  return (
   <Dialog open = {true} PaperProps={{sx: dialogStyle}} hideBackdrop={true}>
    <Container>
        <Box>
            <Title>
            Use WhatsApp on your computer
            </Title>

            <StyledList>
                <ListItem>1. Open WhatsApp on your phone</ListItem>
                <ListItem>2. Tap Menu or Settings and select Whatsapp Web</ListItem>
                <ListItem>3. Point your phone to capture the QR Code</ListItem>
            </StyledList>
        </Box>
        <Box >
            
            <Box style = {{marginTop:"50%"}}>
                <GoogleLogin 
                onSuccess={onLoginSuccess}
                onError={onLoginError}
                shape='pill'
                width={'300px'}
                />

                
            </Box>
        </Box>
    </Container>

   </Dialog>
  )
}

export default SigninBox