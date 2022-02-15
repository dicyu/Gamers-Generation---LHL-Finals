import React, { useState } from "react";
import FriendsList from "./FriendsList";

export default function Gamers(props) {
  // add main application code here

  return (
    <section className="friends-list">
      <FriendsList
        id={props.id}
        gamer_tag={props.gamer_tag}
        timezone={props.timezone}
      />
    </section>
  );
}
