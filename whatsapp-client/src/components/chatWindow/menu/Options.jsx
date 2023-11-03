import React, { useState } from 'react'
import { MoreVert } from '@mui/icons-material'
import { Menu, MenuItem, styled} from '@mui/material'


const MenuContent = styled(MenuItem)`
font-size : 14px;
padding : 10px 26px;
color : #4A4A4A;
`

const Options = ({openDrawer}) => {

    const [open, setOpen] = useState(null);

    const handleOpen = (e) => {
        setOpen(e.target);
    }

    const handleClose = () =>{
        setOpen(null);
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
      
      </Menu>

    </>
  )
}

export default Options