import axios from "axios";
import React, { useState } from "react";
import Input from "./Information/Input";
import { useNavigate } from "react-router-dom";


import "./Register.scss";

export default function Register() {
  const [name, setName] = useState("");
  const [gamer_tag, setGamerTag] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const newFunction = (e) => {
    e.preventDefault()
    return axios
      .post("/register", {
        name,
        gamer_tag,
        email,
        bio,
        password,
      })
      .then(() => {
        console.log("Anything")
        navigate("/");
      })
      .catch((err) => {
        console.log("Horrid", err);
      });
  };
  return (
    <section class="register">
      <div className='register-title'>
        Join 
        <p>Gaming Generations</p>
      </div>
      <div>
        <form
          className="register-form"
        >
          <label className="name">
            Name:
            <Input name="name" placeholder="" setVal={setName} val={name} />
          </label>
          <label className="gamer_tag">
            Gamer-Tag:
            <Input
              name="gamer_tag"
              placeholder=""
              setVal={setGamerTag}
              val={gamer_tag}
            />
          </label>
          <label className="email">
            Email:
            <Input name="email" placeholder="" setVal={setEmail} val={email} />
          </label>
          <br />
          <label className="bio">
            Bio:
            <Input name="bio" placeholder="" setVal={setBio} val={bio} />
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
          <button className="submit" onClick={newFunction}>
            Submit
          </button>
        </form>
      </div>
      <div className='right-image'></div>
    </section>
  );
}
