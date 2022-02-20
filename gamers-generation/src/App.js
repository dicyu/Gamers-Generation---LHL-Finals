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
import UserEditForm from "./components/UserEditForm";
import GamesList from "./components/GamesList";
import HeaderProfile from "./components/HeaderProfile";

import "./components/Navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let user = false;
  let profile = false;
  let editProfile = true;

  if (document.cookie) {
    user = true;
  } else {
    user = false;
  }

  // useEffect(

  // )

  // State for Reporting - Modal
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">
            <IconButton>
              <HomeIcon fontSize="large" className="navbar__home" />
            </IconButton>
          </Link>

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
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// Code Taken out here for now
