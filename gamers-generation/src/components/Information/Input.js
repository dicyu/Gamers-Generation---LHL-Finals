import React, { useState } from "react";

import "../UserForm.scss";

export default function Input(props) {
  const [val, setVal] = useState("");
  const handleChange = (value) => {
    setVal(value);
  };
  return (
    <input
      className="user___create text--semi-bold"
      name={val}
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      placeholder={props.placeholder}
      value={val}
    ></input>
  );
}
