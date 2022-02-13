import React, { useState } from "react";
import Input from "./Information/input";

import "components/UserForm.scss";

export default function UserForm(props) {
  // const [name, setName] = useState(props.name | "");
  // const [gamerTag, setGamerTag] = useState(props.gamerTag | "");
  // const [email, setEmail] = useState(props.email | "");
  // const [password, setPassword] = useState(props.password | null);
  // const [timezone, setTimezone] = useState(
  //   props.timezone | "Eastern Standard Time"
  // );

  return (
    <main className="user__create">
      <form
        action="/action_page.php"
        id="new-user"
        autoComplete="off"
        onSubmit={(event) => event.preventDefault}
      >
        <Input
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.name}
        />
        <Input
          name={props.gamer_tag}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.gamer_tag}
        />
        <Input
          name={props.email}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.email}
        />
        <Input
          name={props.password}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.password}
        />
        <Input
          name={props.timezone}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.timezone}
        />
        <input
          className="user___create--upload-pic text--semi-bold"
          name="filename"
          type="file"
          id="myFile"
        />
        <input
          className="user___create--submit text--semi-bold"
          type="submit"
        />
        <input type="submit" />
      </form>
      <textarea form="new-user" maxlength="240">
        Give us your gaming life's story :3c
      </textarea>
    </main>
  );
}
