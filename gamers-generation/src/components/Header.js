import React from "react";
import Box from "@mui/material/Box";
import "./Header.scss";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

function Header() {
  const signUp = false;
  let title = "";
  if (signUp) {
    title = "Join -- Gamers Generation";
  } else {
    title = "Welcome to Gamers Generation";
  }

  return (
    <div className="header">
      {signUp ? (
        <div className="header__welcome">
          <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
            {title}
          </Box>
          <br />
          <label class="smaller-text">
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              This is a smaller instruction for Gamers Generation. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Box>
          </label>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
