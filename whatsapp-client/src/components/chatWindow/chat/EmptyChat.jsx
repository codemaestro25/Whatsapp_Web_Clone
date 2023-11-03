import React from 'react'
import { Box, styled, Typography, Divider } from '@mui/material'
import {emptyChatImage} from '../../constants';


const MainContainer = styled(Box)`
padding : 30px 0;
text-align : center;
background-color : #f8f9fa;
height : 100vh;
`

const Image = styled('img')({
width : 400,
marginTop : 100

})

const Container = styled(Box)`
padding : 0 200px;

`

const Title = styled(Typography)`
color : #41525d;
font-size : 32px;
font-weight : 300;
font-family : inherit ;
margin : 40px 0;
`


const StyledDivider = styled(Divider)`
margin : 60px 0;
opacity : 0.4;
height : 200;
`
const EmptyChat = () => {
  return (
   <MainContainer>
    <Container>
      <Image src={emptyChatImage} alt="Empty Chat Image" srcset="" />
      <Title>WhatsApp Web</Title>
      <Typography>WhatsApp clone using Google Authentication</Typography>
      <StyledDivider/>

   </Container>
   </MainContainer>
  )
}

export default EmptyChat