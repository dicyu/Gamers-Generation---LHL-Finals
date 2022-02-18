import React, { useState } from "react";
import Input from "./Information/Input";
import Button from "./Button";
import axios from "axios";

import "../App.scss";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const newFunction = () => {
    return axios
      .post("http://localhost:8001/login", {
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        fetch("http://localhost:8002/").then((res) => res.json());
      })
      .catch((err) => {
        console.log("Login failed, ", err);
      });
  };
  return (
    <section class="login">
      <div>
        <form class="login-form">
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
          <label class="passwordConfirm">
            Confirm password:
            <Input
              type="password"
              name="confirm-password"
              setVal={setConfirmPassword}
              val={confirmPassword}
              placeholder=""
            />
          </label>
          <Button submit onClick={newFunction}>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
