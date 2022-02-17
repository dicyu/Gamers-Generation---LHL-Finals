import React, { useState } from "react";
import "./Navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
// import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Router, Link } from "react-router-dom";

//, Routes, Route

function Navigation() {
  return (
    <div className="navbar">
      <IconButton>
        <HomeIcon fontSize="large" className="navbar__home" />
      </IconButton>

      <span className="navbar__authentication">
        <Router>
          <Link to="/register">
            <IconButton>
              <Button
                variant="outlined"
                href="#contained-buttons"
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
                href="#contained-buttons"
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
            <Route path=''></Route>
            <Route></Route>
          </Routes> */}
        </Router>
      </span>
    </div>
  );
}

export default Navigation;
