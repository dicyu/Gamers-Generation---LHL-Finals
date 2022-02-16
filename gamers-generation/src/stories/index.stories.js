import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Input from "../components/Information/Input";
import Button from "../components/Button";

storiesOf("Input", module).add("Base", () => (
  <Input placeholder={"Death is upon us :D"} />
));

storiesOf("Button", module)
<<<<<<< HEAD
  .add("Cancel", () => {
    <Button cancel>Cancel</Button>;
  })
  .add("Add", () => {
    <Button add>Add</Button>;
  })
  .add("Remove", () => {
    <Button remove>Remove</Button>;
  })
  .add("Clickable", () => {
    <Button onClick={action("button-clicked")}>Click Me</Button>;
  });
=======
  .add("Base", () => <Button>Base</Button>)
  .add("Remove", () => <Button remove>Cancel</Button>)
  .add("Cancel", () => <Button cancel>Cancel</Button>)
  .add("Submit", () => <Button submit>Submit</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ));
>>>>>>> 42e43b2a21d4565d4b1224ebd8553282f52c7bc6
