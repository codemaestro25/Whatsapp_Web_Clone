import React, {useContext} from 'react'
import {Box, Dialog, styled } from '@mui/material';
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';
import Chat from './chat/Chat';
import { AccountContext } from '../context/AccountProvider';

const dialogStyle = {
    height:"95%",
    width:"100%",    
    maxWidth:"100%",
    maxHeight:"100%",
    overflowY: "visible",

}

const Container = styled(Box)`
display:flex;
// overflow: hidden;
`

const MenuContainer = styled(Box)`
min-width:450px;
`

const ChatContainer = styled(Box)`
flex:1;
`

const ChatDialog = () => {

    const {person} = useContext(AccountContext)
    return(
        <Dialog open={true} PaperProps={{sx:dialogStyle}} hideBackdrop={true} maxWidth={"md"}>
        <Container>
           <MenuContainer>
                <Menu />
           </MenuContainer>
           <ChatContainer>
               {Object.keys(person).length ? <Chat /> : <EmptyChat />}
               
           </ChatContainer>

        </Container>

        </Dialog>
    )
}

export default ChatDialog;