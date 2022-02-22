import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import ReportModal from "./components/Modal";
import ProfileCards from "./components/ProfileCards";
import Login from "./components/Login";
import Register from "./components/Register";
import Body from "./components/Body";

import EditProfile from "./components/EditProfile";

import {
  getAccessTokenInLocalStorage,
  storeAccessTokenInLocalStorage,
} from "./helpers/helpers";

import "./components/Navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  // State for user
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // Create Likes
  const createLike = (received_like) => {
    axios
      .post(`/likes?token=${token}`, {
        received_like,
      })
      .then((res) => {
        if (res.data.matchCreated) {
          // showModal
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const storedToken = getAccessTokenInLocalStorage("token");
    return axios
      .get(`/current-user?token=${storedToken}`)
      .then((res) => {
        setToken(res.data.token);
        setCurrentUser(res.data.result);
      })
      .catch((err) => {
        setToken(null);
      });
  }, []);

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


  const handleRegister = (name, gamer_tag, email, password) => {
    return axios
      .post(
        "/register",
        {
          name,
          gamer_tag,
          email,
          password,
        }
      )
      .then((res) => {
        console.log(res.data);
        storeAccessTokenInLocalStorage(res.data.token);
        setToken(res.data.token);
        setCurrentUser(res.data.result);
      })
      .catch((err) => {
        console.log("RIP", err);
      });
  };

  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">
            <IconButton>
              <HomeIcon fontSize="large" className="navbar__home" />
            </IconButton>
          </Link>
          {token ? (
            <span className="navbar__authentication">
              <Sidebar gamer_tag={currentUser && currentUser.gamer_tag} />
            </span>
          ) : (
            <span className="navbar__authentication">
              <Link to="/register">
                <IconButton>
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "transparent",
                      color: "#fff",
                    }}
                  >
                    Sign up
                  </Button>
                </IconButton>
              </Link>
              <Link to="/login">
                <IconButton>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#fff",
                      color: "#000",
                    }}
                  >
                    Login
                  </Button>
                </IconButton>
              </Link>
            </span>
          )}
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Body />
              </div>
            }
          />
          <Route
            path="/register"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route
            path="/swipe"
            element={<ProfileCards createLike={createLike} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// Code Taken out here for now
