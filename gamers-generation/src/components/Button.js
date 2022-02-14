import React from "react";

export default function Button([props]) {
  return (
    <button className={props.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
