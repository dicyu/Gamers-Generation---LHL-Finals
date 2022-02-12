import React from "react";
import Box from "@mui/material/Box";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
        Random Text is here I might be able to edit random text later on
      </Box>
      <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
        This is a smaller instruction for Gamers Geneartion. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Box>
    </div>
  );
}

export default Header;
