import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import ThierMesage from "./ThierMesage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  
  const RenderMessages=()=>
  {
     const keys=Object.keys(messages);
     return keys.map((key,index)=>
     {
       const message=messages[key];
       const lastMessage=index===0?null:keys[index-1];
       const isMessage=userName==message.sender.userName;
         
       return(
         <div key={`msg${index}`} style={{width:'100%'}}>
         <div className="message-block">
         {
           isMessage?<MyMessage/>:<ThierMesage/>
         }
         </div>
         <div className="read-reciepts" 
         style={{
           marginRight:isMessage
           ?'18px':'0px',
            marginLeft:isMessage
           ?'0px':'68px'

           }}></div>
         </div>
         )
     })
  };
  RenderMessages();
  if(!chat)
   return "Loading...";
  return 
  (<div className="chat-feed" >
  <div className="chat-title-container">
  <div className="chat-title">{chat?.title}
  <
  </div>
  </div>
  </div>);
};

export default ChatFeed;
