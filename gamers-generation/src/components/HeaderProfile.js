import React from "react";
import { Avatar, IconButton } from "@mui/material";

function HeaderProfile() {
  return (
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
  );
}

export default HeaderProfile;
