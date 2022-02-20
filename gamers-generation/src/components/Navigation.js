import React from "react";
import "./Navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Register from "./Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </span>
    </div>
  );
}

export default Navigation;
