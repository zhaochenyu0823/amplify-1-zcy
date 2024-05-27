import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import amplifyconfig from './amplifyconfiguration.json';
import "./styles/index.css";
import NavBar from "./pages/NavBar.tsx";


Amplify.configure(amplifyconfig);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      {({ signOut }) => (
        <><NavBar /><button onClick={signOut}>Sign out</button></>
      )}
    </Authenticator>
  </React.StrictMode>
);


