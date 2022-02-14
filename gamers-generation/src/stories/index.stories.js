import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Input from "../components/Information/Input";
import Button from "../components/Button";

storiesOf("Input", module).add("Base", () => (
  <Input placeholder={"Death is upon us :D"} />
));

storiesOf("Button", module)
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
