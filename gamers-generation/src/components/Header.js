import React from "react";
import Box from "@mui/material/Box";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
        Welcome to Gamers Generation
      </Box>
      <label class="smaller-text">
        <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
          This is a smaller instruction for Gamers Generation. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Box>
      </label>
    </div>
  );
}

export default Header;
