import React from "react";
import "./Navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import UserForm from "./UserForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar">
      <IconButton>
        <HomeIcon fontSize="large" className="navbar__home" />
      </IconButton>

      <span className="navbar__search">
        <input placeholder="Search games" />
        <IconButton>
          <SearchIcon className="searchIcon" />
        </IconButton>
      </span>

      <span className="navbar__authentication">
        <Router>
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
          <Routes>
            <Route path="/register" element={<UserForm />} />
          </Routes>
        </Router>
      </span>
    </div>
  );
}

export default Navigation;
