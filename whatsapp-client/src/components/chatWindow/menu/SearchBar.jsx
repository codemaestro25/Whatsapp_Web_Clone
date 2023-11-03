import React from "react";
import { Box, InputBase, styled } from "@mui/material";
import { Search } from "@mui/icons-material";


const Container = styled(Box)`
height:45px;
background-color:#fff;
display : flex;
align-items : center;
`

const Wrapper = styled(Box)`
background-color: #f0f2f5;
position: relative;
width: 100%;
margin: 2px 8px;
border-radius: 16px;
`

const IconStyle = styled(Box)`
position : absolute;
height:100%;
color: #919191;
padding : 4px;
margin: 0 15px;
`

const Searchbase = styled(InputBase)`
width:100%;
padding: 16px;
padding-left: 66px;
font-size : 14px;
height: 18px;

`

const SearchBar = ({setSearchText}) => {
  return (
    <Container>
      <Wrapper>
        <IconStyle>
          <Search />
        </IconStyle>
        <Searchbase placeholder="Search or start a new chat" onChange={(e)=>setSearchText(e.target.value)}/>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
