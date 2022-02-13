import React, { useState } from "react";

export default function UserForm(props) {
  const [name, setName] = useState(props.name | "");
  const [gamerTag, setGamerTag] = useState(props.gamerTag | "");
  const [email, setEmail] = useState(props.email | "");
  const [password, setPassword] = useState(props.password | null);
  const [timezone, setTimezone] = useState(
    props.timezone | "Eastern Standard Time"
  );

  return (
    <main className="user__create">
      <form autoComplete="off" onSubmit={(event) => event.preventDefault}>
        <input
          className="user___create--input-name text--semi-bold"
          name={name}
          type="text"
          placeholder=""
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="user___create--input-gamertag text--semi-bold"
          name={gamerTag}
          type="text"
          placeholder=""
          onChange={(e) => setGamerTag(e.target.value)}
          value={gamerTag}
        />
        <input
          className="user___create--input-email text--semi-bold"
          name={email}
          type="text"
          placeholder=""
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="user___create--input-password text--semi-bold"
          name={password}
          type="text"
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          className="user___create--input-timezone text--semi-bold"
          name={timezone}
          type="text"
          placeholder=""
          onChange={(e) => setTimezone(e.target.value)}
          value={timezone}
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
      </form>
    </main>
  );
}
