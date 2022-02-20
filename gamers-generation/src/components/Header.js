import React from "react";
import Box from "@mui/material/Box";
import "./Header.scss";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

function Header() {
  const signUp = true;
  let title = "";
  if (signUp) {
    title = "Join Gamers Generation";
  } else {
    title = "Welcome to Gamers Generation";
  }

  return (
    <div className="header">
      {signUp ? (
        <div className="header__welcome">
          <div className='title'>
            {title}
          </div>
          <br />
<<<<<<< HEAD
          <label className="smaller-text">
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              This is a smaller instruction for Gamers Generation. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Box>
=======
          <label class="smaller-text">
              Welcome to Gamer's Generation.
              <p>A place where you can find liked minded gamers to play your favorite game with!</p>
>>>>>>> 1c8fad7a2c4d55b9071a4dbf90df43d0adeaaac6
          </label>
            <button className='signup-btn'>Sign Up</button>
            <div className='header-2'>Get started</div>
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
