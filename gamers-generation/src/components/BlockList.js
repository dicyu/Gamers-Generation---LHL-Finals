import React from "react";

export default function FriendsListItem(props) {
  return (
    <section>
      <li>
        <h2>Gamer tag: {props.gamer_tag}</h2>
        <h3>Timezone: {props.timezone}</h3>
      </li>
      {props.selected && props.gamer_tag}
    </section>
  );
}
