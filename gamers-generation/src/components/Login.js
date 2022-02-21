import React, { useState } from "react";
import Input from "./Information/Input";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../App.scss";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const storeAccessTokenInLocalStorage = (token)  => {
    localStorage.setItem('token', token)
  }

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
      .then((res) => {
        storeAccessTokenInLocalStorage(res.data.token)
        navigate("/");
      })
      .catch((err) => {
        console.log("Login failed, ", err);
      });
  };
  return (
    <section class="login">
      <div className='test'>
        <div class='login-title'>
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
          <Button submit onClick={newFunction}>
            Submit
          </Button>
        </form>
        <div className='right-image-login'></div>
      </div>
    </section>
  );
}
