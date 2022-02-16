import React from "react";
import Input from "./Information/Input";
import Submit from "./Information/Submit";

import "../App.scss";
import "./Login.scss";

export default function Login(props) {
  return (
    <section class="login">
      <div>
        <form class="login-form">
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
