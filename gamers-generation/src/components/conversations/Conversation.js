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
        console.log("Balloons are suffering :D", res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser, conversation]);

  console.log(`Now we're not users`, users);
  const friend = users.filter((user) => user.id !== currentUser?.id);
  console.log(`Now we're not friend`, friend);

  return (
    <div>
      {friend.map((user) => {
        return (
          <div className="conversation__mainContainer">
            <img className="conversation__image" src={user?.avatar} alt="" />
            <span className="conversation__name">{user?.gamer_tag}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Conversation;
