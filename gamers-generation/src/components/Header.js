import React from "react";
import Box from "@mui/material/Box";
import "./Header.scss";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

function Header() {
  const signUp = false;

  return (
    <div className="header">
      {signUp ? (
        <div className="header__welcome">
          <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
            Random Text is here I might be able to edit random text later on
          </Box>
          <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
            This is a smaller instruction for Gamers Geneartion. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Box>
        </div>
      ) : (
        <div>
          <IconButton>
            <Avatar
              fontSize="large"
              sx={{ width: 120, height: 120 }}
              style={{ border: "3px solid green" }}
            />
            <span className="header__username">bybang</span>
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default Header;
