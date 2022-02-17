import React from "react";
import Input from "./Information/Input";

import "./UserForm.scss";

export default function UserForm(props) {
  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };

  return (
    <main className="user__create">
      <form
        action="http://localhost:8001/friends"
        id="new-user"
        autoComplete="off"
        onSubmit={(event) => event.preventDefault}
      >
        <label>
          Name:
          <Input
            name="name"
            value={props.name}
            placeholder=""
            onKeyDown={handleEnter}
          />
        </label>
        <label>
          Username:
          <Input
            name="gamer_tag"
            value={props.gamer_tag}
            placeholder=""
            onKeyDown={handleEnter}
          />
        </label>
        <label>
          Email:
          <Input
            name="email"
            value={props.email}
            placeholder=""
            onKeyDown={handleEnter}
          />
        </label>
        <label>
          Password:
          <Input
            name="password"
            value={props.password}
            placeholder=""
            onKeyDown={handleEnter}
          />
        </label>
        <label>
          Timezone:
          <Input
            name="timezone"
            value={props.timezone}
            placeholder=""
            onKeyDown={handleEnter}
          />
        </label>
        <label>
          Avatar:
          <input
            className="user___create--upload-pic text--semi-bold"
            name="filename"
            type="file"
            id="myFile"
          />
        </label>
        <input
          className="user___create--submit text--semi-bold"
          type="submit"
        />
      </form>
    </main>
  );
}
