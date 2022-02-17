import React, { useState } from "react";
import Input from "./Information/Input";
import "./EditProfile.scss";
import Button from "./Button";

function EditProfile() {
  const [form, setForm] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="editProfile__container">
        <div className="edit__bio">
          <label for="bio">Bio</label>
          <input
            className="user___create text--semi-bold"
            id="bio"
            name="bio"
            type="text"
            onChange={handleChange}
            placeholder="type your Bio in here"
          ></input>
        </div>
        <Input id="name" handleChange={handleChange} />
        <Input id="gamerTag" handleChange={handleChange} />
        <Input id="email" handleChange={handleChange} />
        <Input id="avatar" handleChange={handleChange} />
        <Input id="password" handleChange={handleChange} />
        <Input id="timezone" handleChange={handleChange} />
        <div className="edit__submit">
          <Button type="submit" />
        </div>
      </div>
    </form>
  );
}

export default EditProfile;
