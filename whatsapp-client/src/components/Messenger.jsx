import React from "react";
import { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import SigninBox from "./account/SigninBox";
import { AccountContext } from "./context/AccountProvider";
import ChatDialog from "./chatWindow/ChatDialog";

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00a884;
`;

const ChatHeader = styled(AppBar)`
  height: 180px;
  background-color: #00a884;
`;
// background grey box

const GreyBack = styled(Box)`
  height: 100vh;
  background-color: #d0d6d9;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return account ? (
    <>
    <ChatHeader>
      <Toolbar>

      </Toolbar>
    </ChatHeader>
    <ChatDialog />
    </>
  ) : (
    <>
      <GreyBack>
        <LoginHeader>
          <Toolbar></Toolbar>
        </LoginHeader>

        <SigninBox />
      </GreyBack>
    </>
  );
};

export default Messenger;
