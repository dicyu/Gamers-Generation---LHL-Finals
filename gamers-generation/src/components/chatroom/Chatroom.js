import React, { useEffect, useState, useRef } from "react";
import queryString from "query-string";
import Navigation from "../Navigation";
import "./Chatroom.scss";
import Conversation from "../conversations/Conversation";
import Chat from "../chat/Chat";
import MatchHistory from "../matchHistory/MatchHistory";
import axios from "axios";
import { getAccessTokenInLocalStorage } from "../../helpers/helpers";
import { io } from "socket.io-client";

function Chatroom({ currentUser }) {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState("");
  const [arrivalChat, setArrivalChat] = useState(null);
  const [receiver, setReceiver] = useState("");

  const socket = useRef();
  const scrollRef = useRef();
  const storedToken = getAccessTokenInLocalStorage("token");

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
    socket.current.on("getMessage", (data) => {
      console.log("what is this data", data);
      setArrivalChat({
        senderId: data.senderId,
        text: data.text,
      });
    });
  }, []);

  useEffect(
    (conversation) => {
      const members = [conversation?.gamer_1_id, conversation?.gamer_2_id];

      arrivalChat &&
        members.includes(arrivalChat.senderId) &&
        setArrivalChat((prev) => [...prev, arrivalChat]);
    },
    [arrivalChat, currentChat]
  );

  useEffect(() => {
    if (!currentUser?.id) return;
    socket.current.on("getUsers", (users) => {
      console.log("<<<<Socket Users>>>>>", users);
    });
    socket.current.emit("addUser", currentUser.id);
  }, [currentUser?.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const chat = {
      conversation_id: currentChat.id,
      sender_id: currentUser.id,
      receiver_id: receiver,
      chat: newChat,
    };

    socket.current.emit("sendMessage", {
      senderId: currentUser.id,
      receiverId: receiver,
      text: newChat,
    });

    try {
      const res = await axios.post(`/chats`, chat);
      setChats([...chats, res.data]);
      setNewChat("");
    } catch (error) {
      console.log(error);
    }
  };

  const setConvo = (conversation) => {
    setCurrentChat(conversation);
    currentUser.id === conversation.gamer_1_id
      ? setReceiver(conversation.gamer_2_id)
      : setReceiver(conversation.gamer_1_id);
  };

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/conversations?token=${storedToken}`);
        setConversations(res.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [storedToken]);

  useEffect(() => {
    const getChats = async () => {
      return await axios
        .get(`/chats?token=${storedToken}`)
        .then((res) => {
          setChats(res.data);
        })
        .catch((err) => {
          console.log("Fire is bad: ", err);
        });
    };
    getChats();
  }, [currentChat]);

  // chat box scroll to the bottom
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  console.log("currentChat??????????????", currentChat);
  console.log("conversations", conversations);
  console.log("token?", storedToken);

  return (
    <>
      <div className="chatroom__mainContainer">
        <div className="chatroom__menu">
          <div className="chatroom__menuWrapper">
            <input
              className="chatroom__menu__input"
              placeholder="Search for friends"
            />
            {conversations.map((conversation) => {
              console.log("conversation???????????", conversation);
              return (
                <div
                  onClick={() => setConvo(conversation)}
                  className="chatroom_conversations"
                >
                  <Conversation
                    conversation={conversation}
                    currentUser={currentUser}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="chatroom__box">
          <div className="chatroom__boxWrapper">
            {currentChat ? (
              <>
                <div className="chatroom__boxTop">
                  {chats.map((c) => (
                    <div ref={scrollRef}>
                      <Chat chatObj={c} own={c.sender_id === currentUser.id} />
                    </div>
                  ))}
                </div>
                <div className="chatroom__boxBottom">
                  <textarea
                    className="chatroom__boxBottom__input"
                    placeholder="write a message..."
                    onChange={(e) => {
                      setNewChat(e.target.value);
                    }}
                    value={newChat}
                  ></textarea>
                  <button
                    className="chatroom__boxBottom__submitButton"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="chatroom__noConversation">
                Open a conversation to start a chat!
              </span>
            )}
          </div>
        </div>
        <div className="chatroom__matchHistory">
          <div className="chatroom__matchHistoryWrapper">
            <MatchHistory />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatroom;
