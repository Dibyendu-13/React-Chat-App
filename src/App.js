import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";


const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="
04494423-37f5-4dec-a115-cbe51bc5dc74"
      userName="javascriptmastery"
      userSecret="hello6buddy"
      renderChatFeed={(chatAppProps)=><ChatFeed{ ...chatAppProps}/>}
    />
  );
};

export default App;
