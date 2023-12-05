import React, { useState, useContext } from 'react'
import { MoreVert } from '@mui/icons-material'
import { Menu, MenuItem, styled} from '@mui/material'
import { googleLogout } from '@react-oauth/google'
import { AccountContext } from '../../context/AccountProvider'



const MenuContent = styled(MenuItem)`
font-size : 14px;
padding : 10px 26px;
color : #4A4A4A;
`

const Options = ({openDrawer}) => {

    const [open, setOpen] = useState(null);
    const {setAccount, socket, setPerson} = useContext(AccountContext);
 
    const handleOpen = (e) => {
        setOpen(e.target);
    }

    const handleClose = () =>{
        setOpen(null);
    }

    const handleLogout = async() =>{
        try {
          await googleLogout();

          // setAccount();
          setPerson({});
          socket.current.disconnect();
          console.log("Logout Successfull!");
        } catch (error) {
          console.log("Error: ", error);
        }
    }
  return (
    <>
    
    <MoreVert onClick={handleOpen} />
    <Menu

        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
       
        transformOrigin={
            {
                vertical: 'top',
                horizontal: 'right'
            }

        }
        anchorOrigin={
                    {
                vertical: 'bottom',
                horizontal: 'left'
            }
        }   
      
      >
        <MenuContent onClick={()=>{handleClose(); openDrawer(true)}}>Profile</MenuContent>
        {/* <MenuContent onClick={handleLogout}>Logout</MenuContent> */}
       
      
      </Menu>

    </>
  )
}

export default Options