import React, { useState, useEffect } from "react";
import Input from "./Information/Input";
import "./EditProfile.scss";
import Button from "./Button";
import axios from "axios";
import { getAccessTokenInLocalStorage } from "../helpers/helpers";
import { useNavigate } from "react-router-dom";

function EditProfile(props) {
  const [name, setName] = useState("");
  const [gamer_tag, setGamer_tag] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [timezone, setTimezone] = useState("");
  const [bio, setBio] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const storedToken = getAccessTokenInLocalStorage("token");
    return axios
      .get(`/current-user?token=${storedToken}`)
      .then((res) => {
        setCurrentUser(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(currentUser)

  const editGamer = () => {
    props
    .handleEdit(currentUser.id, name, gamer_tag, bio, email, password, timezone)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Edit failed, ", err);
      });
  };

  return (
    <form
      className="edit-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="editProfile__container">
        <div className="edit__bio">
          <label for="bio">Bio: </label>
          <textarea
            className="user___create text--semi-bold"
            id="bio"
            name="bio"
            type="text"
            placeholder=""
            onChange={(e) => setBio(e.target.value)}
            value={bio}
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
          <Button submit onClick={editGamer}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default EditProfile;