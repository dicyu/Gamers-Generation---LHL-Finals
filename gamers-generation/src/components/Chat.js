import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "http://localhost:8001/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    // to our endpoint
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    // listenner
    socket.on("message", (message) => {
      // adding new messages
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="chat__mainContainer">
      <div className="container">
        <input
          value={message}
          onChange={(e) => setMessage([e.target.value])}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
      </div>
    </div>
  );
}

export default Chat;
// import React, { useState } from 'react'
// import './Chat.scss'

// function Chat(props) {
//   const [form, setForm] = useState({});

//   const handleChange = (event) => {
//     const value = event.target.value;
//     setForm({ ...form, value });
//   };

//   // const onSubmit = () => {
//   //   console.log(form)
//   // }

//   console.log(form)

//   return (
//     <div className='chat'>
//       <div className='chat__name'>
//         {/* Dynamically changed name */}
//         <h1>@Ren</h1>
//       </div>
//       <div className='chat__chat-container'>
//       </div>
//       <textarea
//         className="chat__text"
//         id="chatText"
//         name="chatText"
//         type="text"
//         onChange={handleChange}
//         placeholder="Enter...">
//       </textarea>
//       <div className='chat-footer'>
//       <button onClick={props.onSubmit} className="button">
//         ⏎
//       </button>
//       </div>
//     </div>
//   )
// }

// export default Chat;
