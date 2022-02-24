// import axios from "axios";
import React, { useState } from "react";
import Input from "./Information/Input";
import Button from "./Button";
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
    <section className="login">
      <div className="test">
        <div className="login-title">
          Welcome to
          <p className="title-text">Gaming Generations</p>
        </div>
        <form
          className="login-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="email">
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
          <Button className="login__submit" submit onClick={loginUser}>
            Submit
          </Button>
        </form>
        <div className="right-image-login"></div>
      </div>
    </section>
  );
}
