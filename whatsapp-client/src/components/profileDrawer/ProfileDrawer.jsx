import React from 'react';
import { Box, Drawer, styled, } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Profile from './Profile';

const ProfileDrawer = ({open , setOpen}) => {


const DrawerStyle = {
  left:30,
  top:22,
  height: "95%",
  width: "26%",
  backgroundColor: "#e9edef"
  
}


const DrawerHeader = styled(Box)`
height:19%;
background-color : #008069;
color: #FFFFFF;
display: flex;


& > svg, & > p {
  
  margin-top : auto;
  padding : 16px;
  font-weight : 600
}




`

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{sx: DrawerStyle}}
      style={{zIndex : 1500}}
    >

    <DrawerHeader>
    <ArrowBack onClick={handleClose}/>
    <Typography>Profile</Typography>     
    </DrawerHeader> 
      
    <Profile />

    </Drawer>
  )
}

export default ProfileDrawer;