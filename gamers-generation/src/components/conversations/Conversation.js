import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAccessTokenInLocalStorage } from "../../helpers/helpers";
import "./Conversation.scss";

function Conversation({ conversation, currentUser }) {
  const [users, setUsers] = useState([]);
  const storedToken = getAccessTokenInLocalStorage("token");

  useEffect(() => {
    axios
      .get(`/matches?token=${storedToken}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser, conversation]);

  const friend = users.filter((user) => user.id !== currentUser?.id);

  return (
    <div className="conversation__mainContainer">
      <img
        className="conversation__image"
        src="https://images.unsplash.com/photo-1645504812848-29c2ebd5cd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <span className="conversation__name">{friend[0]?.name}</span>
    </div>
  );
}

export default Conversation;
