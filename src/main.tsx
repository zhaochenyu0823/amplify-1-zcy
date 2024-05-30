import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import amplifyconfig from './amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import "./styles/index.css";
import NavBar from "./pages/NavBar.tsx";
import './i18n/Japanese';
import { Hub } from 'aws-amplify/utils';







import { fetchUserAttributes } from 'aws-amplify/auth';
async function currentAuthenticatedUser() {
  try {
    const userAttributes = await fetchUserAttributes();
    const { 'custom:password_change_date': passwordChangeDate } = userAttributes;
    console.log(userAttributes);
    console.log(passwordChangeDate);

  } catch (err) {
    console.log(err);
  }
}

Hub.listen('auth', ({ payload }) => {
  switch (payload.event) {
    case 'signedIn':
      currentAuthenticatedUser();
      console.log('user have been signedIn successfully.');
      break;
    case 'signedOut':
      console.log('user have been signedOut successfully.');
      break;
    case 'tokenRefresh':
      console.log('auth tokens have been refreshed.');
      break;
    case 'tokenRefresh_failure':
      console.log('failure while refreshing auth tokens.');
      break;
    case 'signInWithRedirect':
      console.log('signInWithRedirect API has successfully been resolved.');
      break;
    case 'signInWithRedirect_failure':
      console.log('failure while trying to resolve signInWithRedirect API.');
      break;
    case 'customOAuthState':
      console.info('custom state returned from CognitoHosted UI');
      break;
  }
});

Amplify.configure(amplifyconfig);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator  >
      {({ signOut }) => (
        <><NavBar /><button onClick={signOut}>Sign out</button></>
      )}
    </Authenticator>
  </React.StrictMode>
);


