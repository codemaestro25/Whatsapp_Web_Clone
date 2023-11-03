import AccountProvider from './components/context/AccountProvider';

import './App.css';
import Messenger from './components/Messenger';


import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const clientId = '807502778295-dogau3okb93a3hprs8kfbosctf9n0tqb.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId = {clientId}>
    <AccountProvider>
      <Messenger />

    </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
