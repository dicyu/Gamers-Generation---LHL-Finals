import React from "react";
import "./Sidebar.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditProfile from "./EditProfile";
import { Link, Route, Routes } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>
          <div className="sidebar__username">
            <span>bybang</span>
            <span className="sidebar__status">
              <FiberManualRecordIcon />
              Online
            </span>
          </div>
          <Link to="/edit">
          <IconButton>
            <Avatar
              fontSize="large"
              sx={{ width: 75, height: 75 }}
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
