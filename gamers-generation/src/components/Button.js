import React from "react";
import classNames from "classnames";

import "../components/Button.scss";

export default function Button(props) {
  const buttonClass = classNames("button", {
    "button--cancel": props.cancel,
    "button--add": props.add,
    "button--remove": props.remove,
  });

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
