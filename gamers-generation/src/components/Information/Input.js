import React, { useState } from "react";

import "../UserForm.scss";

export default function Input(props) {
  const [name, setName] = useState("");
  const handleChange = (value) => {
    setName(value);
  };
  return (
    <input
      className="user___create text--semi-bold"
      name={name}
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      placeholder={props.placeholder}
      value={name}
    ></input>
  );
}
