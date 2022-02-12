import React from "react";
import "./Sidebar.scss";
import Avatar from "@mui/material/Avatar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import IconButton from "@mui/material/IconButton";

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
          <IconButton>
            <Avatar
              fontSize="large"
              sx={{ width: 75, height: 75 }}
              style={{ border: "3px solid green" }}
            />
          </IconButton>
        </h2>
      </div>
    </div>
  );
}

export default Sidebar;
