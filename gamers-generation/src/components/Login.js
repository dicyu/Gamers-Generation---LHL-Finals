import React, { useState } from "react";
import Input from "./Information/Input";
import Button from "./Button";
import axios from "axios";

import "../App.scss";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const newFunction = () => {
    return (
      axios
        .post(
          "/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        )
        // .then((res) => {
        //   fetch("http://localhost:8002/").then((res) => res.json());
        // })
        .catch((err) => {
          console.log("Login failed, ", err);
        })
    );
  };
  return (
    <section class="login">
      <div>
        <form class="login-form" onSubmit={(event) => event.preventDefault()}>
          <label class="email">
            Email:
            <Input name="email" setVal={setEmail} val={email} placeholder="" />
          </label>
          <br />
          <label class="password">
            Password:
            <Input
              type="password"
              name="password"
              setVal={setPassword}
              val={password}
              placeholder=""
            />
          </label>
          <br />
          <Button submit onClick={newFunction}>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
