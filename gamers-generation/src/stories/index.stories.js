import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Input from "../components/Information/Input";
import Loading from "../components/Information/Loading";
import Button from "../components/Button";

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
