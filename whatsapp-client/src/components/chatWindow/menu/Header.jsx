import React, { useState } from 'react'
import { Box, styled } from '@mui/material'
import { Chat } from '@mui/icons-material'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import Options from './Options'
import ProfileDrawer from '../../profileDrawer/ProfileDrawer'

const HeaderComponent = styled(Box)`
height:80px;
background-color:#ededed;
display: flex;
align-items : center;
`

const RightSideIcons = styled(Box)`
margin-left : auto;

& > * {
  margin-right : 20px;
  font-size: 28px;
  color: #626363;
}
`

const Image = styled('img')({
  borderRadius:"50%",
  height: "50px",
  width: "50px",
  marginLeft : "10px"
})

const Header = () => {

  const [open , setOpen] = useState(false);

  const {account} = useContext(AccountContext);

  const toggleButton = () =>{
    setOpen(true);
  }

  return (
   <>
    <HeaderComponent>
      <Image src={account.picture} alt='DP' onClick={()=> toggleButton()}/>

      <RightSideIcons>
        <Chat />
        <Options openDrawer = {setOpen}/>

      </RightSideIcons>
    </HeaderComponent>

    <ProfileDrawer open = {open} setOpen = {setOpen}/>
   </>
  )
}

export default Header