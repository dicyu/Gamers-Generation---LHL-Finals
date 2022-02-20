import React from "react";
import Input from "./Information/Input";
import Button from "./Button";

import "../App.scss";
import "./Login.scss";

export default function Login(props) {
  return (
    <section class="login">
      <form class="login-form">
        <div className="login-title">
          Welcome
          <p>Gaming Generations</p>
        </div>
        <label class="email">
          Email:
          <Input name={props.email} onChange={props.onChange} placeholder="" />
        </label>
        <br />
        <label class="password">
          Password:
          <Input
            type="password"
            name={props.password}
            onChange={props.onChange}
            placeholder=""
          />
        </label>
        <br />
        <label class="passwordConfirm">
          Confirm password:
          <Input
            name={props.confirmPassword}
            onChange={props.onChange}
            placeholder=""
          />
        </label>
        <Button submit>Submit</Button>
      </form>
      <div className='right-image-login'></div>
    </section>
  );
}
