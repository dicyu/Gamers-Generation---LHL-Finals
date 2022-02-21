// import axios from "axios";
import React, { useState } from "react";
import Input from "./Information/Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import "../App.scss";
import "./Register.scss";

export default function Register(props) {
  const [name, setName] = useState("");
  const [gamer_tag, setGamer_tag] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerGamer = () => {
    props
      .handleRegister(name, gamer_tag, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Registration failed, ", err);
      });
  };

  return (
    <section class="register">
      <div className="register-title">
        Join
        <p>Gaming Generations</p>
      </div>
      <div>
        <form className="register-form" onSubmit={(event) => event.preventDefault()}>
          <label className="name">
            Name:
            <Input name="name" placeholder="" setVal={setName} val={name} />
          </label>
          <label className="gamer_tag">
            Username:
            <Input
              name="gamer_tag"
              placeholder=""
              setVal={setGamer_tag}
              val={gamer_tag}
            />
          </label>
          <label className="email">
            Email:
            <Input name="email" placeholder="" setVal={setEmail} val={email} />
          </label>
          <br />
          <label className="password">
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
          <Button submit onClick={registerGamer}>
            Submit
          </Button>
        </form>
      </div>
      <div className="right-image"></div>
    </section>
  );
}
