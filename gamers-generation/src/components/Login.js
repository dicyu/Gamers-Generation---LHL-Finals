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
    return axios
      .post(
        "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .catch((err) => {
        console.log("Login failed, ", err);
      });
  };
  return (
<<<<<<< HEAD
    <section className="login">
      <div>
        <form
          className="login-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="email">
=======
    <section class="login">
      <div className='test'>
        <div class='login-title'>
          Welcome to
          <p>Gaming Generations</p>
        </div>
        <form class="login-form" onSubmit={(event) => event.preventDefault()}>
          <label class="email">
>>>>>>> 1c8fad7a2c4d55b9071a4dbf90df43d0adeaaac6
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
          <Button submit onClick={newFunction}>
            Submit
          </Button>
        </form>
        <div className='right-image-login'></div>
      </div>
    </section>
  );
}
