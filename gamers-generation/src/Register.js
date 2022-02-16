import React from "react";
import Input from "./components/Information/Input";
import Submit from "./components/Information/Submit";

import "./App.scss";
import "./Register.scss";

export default function Register(props) {
  return (
    <section class="login">
      <div>
        <form class="login-form">
          <label class="email">
            Username:
            <Input
              name={props.gamer_tag}
              onChange={props.onChange}
              placeholder=""
            />
          </label>
          <label class="email">
            Email:
            <Input
              name={props.email}
              onChange={props.onChange}
              placeholder=""
            />
          </label>
          <br />
          <label class="password">
            Password:
            <Input
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
          <Submit />
        </form>
      </div>
    </section>
  );
}
