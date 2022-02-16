import React from "react";
import FriendsListItem from "./FriendsListItem";

export default function FriendsList(props) {
  // what props do we want to pass?

  return (
    <FriendsListItem
      id={props.id}
      gamer_tag={props.gamer_tag}
      avatar={props.avatar}
      timezone={props.timezone}
    />
  );
}
