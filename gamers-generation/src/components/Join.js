import React, { useState } from "react";
import { Link } from "react-router-dom";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join__mainContainer">
      <div className="join__InnerContainer">
        <h1 className="heading"></h1>
        <div>
          <input
            placeholder=""
            className="joinInput"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder=""
            className="joinInput"
            type="text"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="chat__submit" type="submit"></button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
