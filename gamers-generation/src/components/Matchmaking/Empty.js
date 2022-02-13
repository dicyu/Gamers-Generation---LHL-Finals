import React from "react";

///////////////////////////////
// working on it later - Ren //
///////////////////////////////

export default function NewFriend(props) {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
}
