import React from "react";
import "./MatchHistory.scss";

function MatchHistory() {
  return (
    <div className="match-history__container">
      <div className="match-history__matched">
        <div className="match-history__imgContainer">
          <img
            className="match-history__image"
            src="https://images.unsplash.com/photo-1645504812848-29c2ebd5cd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
        <span className="match-history__username">John Doe</span>
      </div>
    </div>
  );
}

export default MatchHistory;
