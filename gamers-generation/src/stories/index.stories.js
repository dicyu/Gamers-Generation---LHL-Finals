import React, { useState } from "react";

import { storiesOf } from "@storybook/react";

import Input from "../components/Information/Input";

storiesOf("Input", module).add("Base", () => (
  <Input placeholder={"Death is upon us :D"} />
));
