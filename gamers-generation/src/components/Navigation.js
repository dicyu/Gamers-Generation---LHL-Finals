import React from "react";
import "./Navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Register from "./Register";

function Navigation() {
  return (
    <div className="navbar">
      <Router>
        <Link to="/">
          <IconButton>
            <HomeIcon fontSize="large" className="navbar__home" />
          </IconButton>
        </Link>
      </Router>
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
          {/* <Routes>
            <Route path="/register" element= <Route2/> />
          </Routes> */}
        </Router>
      </span>
    </div>
  );
}

export default Navigation;
