import React from "react";
import Box from "@mui/material/Box";
import "./Header.scss";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

function Header() {
  const signUp = false;
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
          <label class="smaller-text">
              Welcome to Gamer's Generation.
              <p>A place where you can find liked minded gamers to play your favorite game with!</p>
          </label>
            <button className='signup-btn'>Sign Up</button>
            <div className='header-2'>Get started</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
