import React, { useState } from "react";

import "../UserForm.scss";

export default function Input(props) {
  return (
    <div>
      <label for={props.id}>{props.id}</label>
      <input
        className="user___create text--semi-bold"
        id={props.id}
        name={props.id}
        type="text"
        onChange={props.handleChange}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}
