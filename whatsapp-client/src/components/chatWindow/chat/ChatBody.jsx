import React from 'react'
import {Box, styled} from "@mui/material"

const Container = styled(Box)`
background-image : url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
background-size : 50%;
`

const Content = styled(Box)`
height : 80vh;
overflow-y : scroll;
`

const ChatBody = () => {
  return (
    <Container>
      <Content>

      </Content>

    </Container>
  )
}

export default ChatBody