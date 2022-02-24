import axios from "axios";
import React from "react";
import "./Chat.scss";

// we need to pass in convo ID and gamer_ID, huh?

function Chat({ chatObj, own }) {
  console.log("<Chat>", chatObj);
  return (
    <div className={`chat__container ${own && "own"}`}>
      <div className="chat__top">
        <img
          className="chat__image"
          src="https://images.unsplash.com/photo-1645504812848-29c2ebd5cd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <p className="chat__text">{chatObj.chat}</p>
      </div>
      ;<div className="chat__bottom">{chatObj.timecheck}</div>;
    </div>
  );
}

export default Chat;
