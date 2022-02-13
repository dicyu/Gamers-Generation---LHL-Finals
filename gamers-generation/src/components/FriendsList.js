import React from "react";
import classNames from "classnames";
import FriendsListItem from "./FriendsListItem";

export default function FriendsList(props) {
  return (
    <FriendsListItem
      id={props.id}
      selected={props.selected}
      gamer_tag={props.gamer_tag}
      timezone={props.timezone}
    />
  );
}
