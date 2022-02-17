import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Information/input";

import "components/UserForm.scss";

export default function UserForm(props) {
  const { register } = useForm({
    defaultValues: {
      name: "",
      gamer_tag: "luo",
      email: "",
      password: "bycryptMe",
    },
  });

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
        action="http://localhost:8001/gamers"
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
            ref={register}
            onKeyDown={handleEnter}
          />
        </label>
        <label>
          Username:
          <Input
            name="gamer_tag"
            value={props.gamer_tag}
            ref={register}
            onKeyDown={handleEnter}
          />
        </label>
        <label>
          Email:
          <Input
            name="email"
            value={props.email}
            ref={register}
            placeholder=""
            onKeyDown={handleEnter}
          />
        </label>
        <label>
          Password:
          <Input
            name="password"
            value={props.password}
            ref={register}
            placeholder=""
            onKeyDown={handleEnter}
          />
        </label>
        <label>
          Timezone:
          <Input
            name="timezone"
            value={props.timezone}
            ref={register}
            placeholder=""
            onKeyDown={handleEnter}
          />
        </label>
        <label>
          Profile picture:
          <input
            className="user___create--upload-pic text--semi-bold"
            name="avatar"
            type="file"
            id="myFile"
            ref={register}
          />
        </label>
        <input
          className="user___create--submit text--semi-bold"
          type="submit"
        />
        <textarea name="bio" form="new-user" maxlength="240">
          Give us your gaming life's story :3c
        </textarea>
      </form>
    </main>
  );
}
