import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import ReportModal from "./components/Modal";
import ProfileCards from "./components/ProfileCards";
<<<<<<< HEAD
import Profile from "./components/Profile";
// import UserEditForm from "./components/UserEditForm";
import Login from "./components/Login";
// import Register from "./components/Register";
=======
import UserEditForm from "./components/UserEditForm";
import Login from "./components/Login";
import Register from "./components/Register";
import Body from "./components/Body";

>>>>>>> 1c8fad7a2c4d55b9071a4dbf90df43d0adeaaac6
import EditProfile from "./components/EditProfile";

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
<<<<<<< HEAD
      <Navigation />
      <Header />
      <div className="main__container">
        {user ? (
          <div className="sidebar__container">
            <Sidebar />
            <Profile />
          </div>
        ) : (
          <Login />
        )}
        {editProfile ? <EditProfile /> : null}
        {profile ? (
          <div className="cards_container">
            <ProfileCards />
            <ProfileCards />
          </div>
        ) : null}
        <div className="Report">
          <button onClick={() => setShow(true)}>Report</button>
          <ReportModal
            title="Report"
            onClose={() => setShow(false)}
            show={show}
          ></ReportModal>
=======
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
>>>>>>> 1c8fad7a2c4d55b9071a4dbf90df43d0adeaaac6
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
          <Route path='login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// Code Taken out here for now
