import React from "react";

export default function BlockListItem(props) {
  return (
    <section>
      <li>
        <h2>Gamer tag: {props.gamer_tag}</h2>
      </li>
    </section>
  );
}
