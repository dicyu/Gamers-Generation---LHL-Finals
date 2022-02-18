import React from "react";

import "../UserEditForm.scss";

export default function Input(props) {
  let newType = props.type ? props.type : "text";
  const handleChange = (value) => {
    props.setVal(value);
  };
  return (
    <input
      className="user__edit text--semi-bold"
      name={props.name}
      type={newType}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={props.placeholder}
      value={props.val}
    ></input>
  );
}
