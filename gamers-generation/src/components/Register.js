import axios from "axios";
import React, { useState } from "react";
import Input from "./Information/Input";

import "./Register.scss";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const newFunction = () => {
    return axios
      .post("/register", {
        name,
        username,
        email,
        password,
      })
      .catch((err) => {
        console.log("Horrid", err);
      });
  };
  return (
    <section class="register">
      <div>
        <form
          // action="http://localhost:8001/register"
          // method="post"
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
              type="password"
              name="password"
              placeholder=""
              setVal={setPassword}
              val={password}
            />
          </label>
          <br />
          {/* <input class="submit" type="submit" onClick={newFunction} /> */}
          <button class="submit" onClick={newFunction}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
