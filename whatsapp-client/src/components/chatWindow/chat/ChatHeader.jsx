import React, { useContext }  from 'react'
import {Box, styled , Typography} from '@mui/material'

import {Search, MoreVert} from '@mui/icons-material'
import { AccountContext } from '../../context/AccountProvider'
 
const Container = styled(Box)`
height :80px;
width: 100%;
background-color : #ededed;
display : flex ;
align-items : center;
`

const ProfileImage = styled('img')({
    height : 40,
    width : 40,
    borderRadius : "50%"
})

const Name = styled(Typography)`
margin : 0 14px !important ;
`

const Status = styled(Typography)`
font-size : 13px;
margin : 0 14px !important ;
`

const RightSideIcons = styled(Box)`
margin-left : auto;

& > * {
  margin-right : 40px;
  font-size: 28px;
  color: #626363;
}
`
const ChatHeader = () => {

  const {person} = useContext(AccountContext)
  return (
   <Container>
    <ProfileImage src={person.picture} /> 
    <Box>
        <Name>{person.name}</Name>
        <Status>Offline</Status>
    </Box>
       <RightSideIcons>
        <Search />
        <MoreVert />
    </RightSideIcons>
   </Container>
  )
}

export default ChatHeader