import React from "react";
import classNames from "classnames";

export default function FriendsListItem(props) {
  // props: gamer_tag, games_id, timezone

  const selectFriend = classNames("friend", {
    "friend--selected": props.selected,
    "friend--gamer_tag": props.gamer_tag,
  });

  return (
    <section>
      <li
        onClick={() => props.onChange(props.gamers.id)}
        className={selectFriend}
      >
        <h2>Gamer tag: {props.gamer_tag}</h2>
        <h3>Timezone: {props.timezone}</h3>
      </li>
      {props.selected && props.gamer_tag}
    </section>
  );
}

// work on what you'd want this to have later
