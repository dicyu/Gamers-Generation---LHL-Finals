import React from "react";
import "./Navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

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
      </span>
    </div>
  );
}

export default Navigation;
