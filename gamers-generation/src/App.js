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

import { getAccessTokenInLocalStorage } from "./helpers/helpers";

import "./components/Navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  // State for user
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const token = getAccessTokenInLocalStorage();
    return axios.get("/current-user", {
      token
    })
    .then((res) => {
      setCurrentUser(res.data.result)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  console.log(currentUser)

  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">
            <IconButton>
              <HomeIcon fontSize="large" className="navbar__home" />
            </IconButton>
          </Link>
          {currentUser ? (
            <span className="navbar__authentication">
              <Sidebar gamer_tag={"Sasuke"} />
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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit" element={<EditProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// Code Taken out here for now
