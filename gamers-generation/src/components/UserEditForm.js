import React from "react";
import Input from "./Information/Input";

import "./UserEditForm.scss";

export default function UserEditForm() {
  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };

  return (
    <main className="user__edit">
      <form
        action="/gamers"
        id="new-user"
        autoComplete="off"
        onSubmit={(event) => event.preventDefault}
      >
        <label>
          Name:
          <Input name="name" placeholder="" onKeyDown={handleEnter} />
        </label>
        <label>
          Username:
          <Input name="gamer_tag" placeholder="" onKeyDown={handleEnter} />
        </label>
        <label>
          Email:
          <Input name="email" placeholder="" onKeyDown={handleEnter} />
        </label>
        <label>
          Password:
          <Input name="password" placeholder="" onKeyDown={handleEnter} />
        </label>
        <label>
          Avatar:
          <input
            className="user__edit--upload-pic text--semi-bold"
            name="filename"
            type="file"
            id="myFile"
          />
        </label>
        <input className="user__edit--submit text--semi-bold" type="submit" />
      </form>
    </main>
  );
}
