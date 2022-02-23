import React, { useRef, useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Input from "../components/Information/Input";
import Loading from "../components/Information/Loading";
import Button from "../components/Button";
import TinderCard from "react-tinder-card";
import "../components/ProfileCards.scss"

storiesOf("Input", module).add("Base", () => (
  <Input placeholder={"Death is upon us :D"} />
));

storiesOf("Button", module)
  .add("Base", () => <Button>Base</Button>)
  .add("Remove", () => <Button remove>Cancel</Button>)
  .add("Cancel", () => <Button cancel>Cancel</Button>)
  .add("Submit", () => <Button submit>Submit</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ));

storiesOf("Loading", module).add("Base", () => 
  <Loading />);

storiesOf("Tinder Card", module).add("Out of Matches", () => 
  <TinderCard
        ref={useRef(0)}
        className="swipe"
        key={"Panda says No"}
        preventSwipe={["up", "down", "left", "right"]}
        >
        <div className="card_bio__container">
          <div
            className="card"
            style={{
              backgroundImage: `url(https://tinyurl.com/2p8w3hbr)`,
            }}
            >
          </div>
          <div className="bio">
            The Panda
            <br />
            <div className="bio-bio">
            The Panda says you are out of matches LUL.
            </div>
          </div>
        </div>
      </TinderCard>
);