import React, { useState } from "react";
import Input from "./Information/Input";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../App.scss";
import "./Login.scss";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = () => {
    props
      .handleLogin(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Login failed, ", err);
      });
  };
  return (
    <section class="login">
      <div className="test">
        <div class="login-title">
          Welcome to
          <p>Gaming Generations</p>
        </div>
        <form class="login-form" onSubmit={(event) => event.preventDefault()}>
          <label class="email">
            Email:
            <Input name="email" setVal={setEmail} val={email} placeholder="" />
          </label>
          <br />
          <label className="password">
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
          <Button submit onClick={loginUser}>
            Submit
          </Button>
        </form>
        <div className="right-image-login"></div>
      </div>
    </section>
  );
}
