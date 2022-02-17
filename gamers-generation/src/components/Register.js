import axios from "axios";
import React, { useState } from "react";
import Input from "./Information/Input";

import "./Register.scss";

export default function Register(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const newFunction = () => {
    return axios
      .post("http://localhost:8001/register", {
        name,
        username,
        email,
        password,
      })
      .then((res) => {
        fetch("http://localhost:8002/");
      })
      .catch((err) => {
        console.log("hLO", err);
      });
  };
  return (
    <section class="register">
      <div>
        <form
          action="http://localhost:8001/register"
          method="post"
          class="register-form"
        >
          <label class="name">
            Name:
            <Input name="name" placeholder="" setVal={setName} val={name} />
          </label>
          <label class="gamer_tag">
            Username:
            <Input
              name="gamer_tag"
              placeholder=""
              setVal={setUsername}
              val={username}
            />
          </label>
          <label class="email">
            Email:
            <Input name="email" placeholder="" setVal={setEmail} val={email} />
          </label>
          <br />
          <label class="password">
            Password:
            <Input
              name="password"
              placeholder=""
              setVal={setPassword}
              val={password}
            />
          </label>
          <br />
          {/* <label class="password">
            Confirm password:
            <Input name="password" placeholder="" />
          </label> */}
          <input onClick={newFunction}></input>
        </form>
      </div>
    </section>
  );
}
