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
<<<<<<< HEAD
    <section className="register">
=======
    <section class="register">
      <div className='register-title'>
        Join 
        <p>Gaming Generations</p>
      </div>
>>>>>>> 1c8fad7a2c4d55b9071a4dbf90df43d0adeaaac6
      <div>
        <form
          // action="http://localhost:8001/register"
          // method="post"
          className="register-form"
        >
          <label className="name">
            Name:
            <Input name="name" placeholder="" setVal={setName} val={name} />
          </label>
          <label className="gamer_tag">
            Username:
            <Input
              name="gamer_tag"
              placeholder=""
              setVal={setUsername}
              val={username}
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
          {/* <input className="submit" type="submit" onClick={newFunction} /> */}
          <button className="submit" onClick={newFunction}>
            Submit
          </button>
        </form>
      </div>

      <div className='right-image'></div>
    </section>
  );
}
