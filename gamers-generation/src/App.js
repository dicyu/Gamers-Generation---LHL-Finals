import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
// import ReportModal from "./components/Modal";
import ProfileCards from "./components/ProfileCards";
import Login from "./components/Login";
import Register from "./components/Register";
import Body from "./components/Body";
import Chatroom from "./components/chatroom/Chatroom";
import MatchedModal from "./components/MatchedModal";
import LoggedSplash from "./components/LoggedSplash";
import EditProfile from "./components/EditProfile";
import {
  getAccessTokenInLocalStorage,
  storeAccessTokenInLocalStorage,
} from "./helpers/helpers";
import "./components/Navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import axios from "axios";

function App() {
  // State for user
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  const [show, setShow] = useState(false);

  // Create Likes
  const createLike = (received_like) => {
    axios
      .post(`/likes?token=${token}`, {
        received_like,
      })
      .then((res) => {
        if (res.data.matchCreated) {
          // showModal
          console.log(res.data.matchCreated);

            setShow(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShow(false);
      });
  };

  const storedToken = getAccessTokenInLocalStorage("token");
  
  useEffect(() => {
    return axios
      .get(`/current-user?token=${storedToken}`)
      .then((res) => {
        setToken(res.data.token);
        setCurrentUser(res.data.result);
      })
      .catch((err) => {
        setToken(null);
      });
  }, [token]);

  const handleLogin = (email, password) => {
    return axios
      .post(
        "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        storeAccessTokenInLocalStorage(res.data.token);
        setToken(res.data.token);
        setCurrentUser(res.data.result);
      })
      .catch((err) => {
        console.log("Login failed, ", err);
      });
  };


  const handleRegister = (name, gamer_tag, bio, email, password) => {
    return axios
      .post("/register", {
        name,
        gamer_tag,
        bio,
        email,
        password,
      })
      .then((res) => {
        storeAccessTokenInLocalStorage(res.data.token);
        setToken(res.data.token);
        setCurrentUser(res.data.result);
      })
      .catch((err) => {
        console.log("RIP", err);
      });
  };


  const handleEdit = (id, name, gamer_tag, bio, email, password, timezone) => {
    return axios
      .post(
        "/edit",
        {
          id,
          name,
          gamer_tag,
          bio,
          email,
          password,
          timezone,
        },
        { withCredentials: true }
      )
      .then((res) => {
        storeAccessTokenInLocalStorage(res.data.token);
        setToken(res.data.token);
        setCurrentUser(res.data.result);
      })
      .catch((err) => {
        console.log("Failed: ", err);
      });
  };

  console.log("This is the thing", currentUser)
  
  return (
    <div className="App">
      <Router>
        <div className="navbar">
        <Navigation />
        </div>
          <MatchedModal
            title="You got a Match!"
            onClose={() => setShow(false)}
            show={show}
          ></MatchedModal>
        <Routes>
          {!token ? (
            <Route
            path="/"
            element={
              <div>
                  <Header />
                  <Body />
                </div>
              }
              />
              ) : (
                <Route
                path="/"
                element={
                  <div>
                  <LoggedSplash
                    gamer_tag={currentUser && currentUser.gamer_tag}
                  />
                </div>
              }
            />
          )}
          <Route
            path="/register"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/edit"
            element={<EditProfile handleEdit={handleEdit} />}
          />
          <Route
            path="/swipe"
            element={<ProfileCards createLike={createLike} />}
          />
          <Route
            path="/chat"
            element={<Chatroom currentUser={currentUser} token={token} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// Code Taken out here for now
