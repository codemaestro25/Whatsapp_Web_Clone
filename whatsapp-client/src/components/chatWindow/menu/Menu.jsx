import React, { useState } from 'react'
import Header from './Header';
import SearchBar from './SearchBar';
import { Box
 } from '@mui/material';
import ConversationsList from './conversations/listConversations';

const Menu = () => {

  const [searchText, setSearchText] = useState('');
  return (
   <Box>
   <Header/>
   <SearchBar setSearchText={setSearchText}/>
   <ConversationsList searchText={searchText}/>
   </Box>
  )
}

export default Menu;