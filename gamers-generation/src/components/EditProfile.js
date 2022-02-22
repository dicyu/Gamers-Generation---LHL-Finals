import React, { useState } from "react";
import Input from "./Information/Input";
import "./EditProfile.scss";
import Button from "./Button";
import axios from "axios";

function EditProfile() {
  const [name, setName] = useState("");
  const [gamer_tag, setGamer_tag] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [timezone, setTimezone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const newFunction = () => {
    return axios
      .post(
        "/edit",
        {
          name,
          gamer_tag,
          email,
          password,
          timezone,
        },
        { withCredentials: true }
      )
      .then(() => {
        console.log("hello");
      })
      .catch((err) => {
        console.log("Failed: ", err);
      });
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <div className="editProfile__container">
        <div className="edit__bio">
          <label for="bio">Bio: </label>
          <textarea
            className="user___create text--semi-bold"
            id="bio"
            name="bio"
            type="text"
            placeholder=""
          ></textarea>
        </div>
        <label>
          Name:
          <Input name="name" setVal={setName} val={name} />
        </label>
        <label>
          Username:
          <Input name="gamerTag" setVal={setGamer_tag} val={gamer_tag} />
        </label>
        <label>
          Email:
          <Input name="email" setVal={setEmail} val={email} />
        </label>
        <label>
          Avatar:
          <Input name="avatar" setVal={setAvatar} val={avatar} />
        </label>
        <label>
          Password:
          <Input name="password" setVal={setPassword} val={password} />
        </label>
        <label>
          Timezone:
          <Input name="timezone" setVal={setTimezone} val={timezone} />
        </label>
        <div className="edit__submit">
          <Button submit onClick={newFunction} />
        </div>
      </div>
    </form>
  );
}

export default EditProfile;
