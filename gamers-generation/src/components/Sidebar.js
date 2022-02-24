import React from "react";
import "./Sidebar.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
// import EditProfile from "./EditProfile";
import { Link } from "react-router-dom";

function Sidebar({currentUser}) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>
          <div className="sidebar__username">
            <span>{currentUser?.gamer_tag}</span>
            <span className="sidebar__status">
              <FiberManualRecordIcon />
              Online
            </span>
          </div>
          <Link to="/edit">
          <IconButton>
            <Avatar
              fontSize="medium"
              sx={{ width: 70, height: 70 }}
              src={currentUser?.avatar}
              style={{ border: "3px solid green" }}
            />
          </IconButton>
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Sidebar;
