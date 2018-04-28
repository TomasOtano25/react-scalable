import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import Link from "../src/components/common/Link";
import TextInput from "../src/components/common/TextInput";

storiesOf("Link", module).add("to LinkList", () => (
  <Link onClick={action("clicked")} link="Link 1" topic="Javascript">
    Texto
  </Link>
));

storiesOf("Inputs", module).add("TextInput", () => (
  <TextInput
    error={false}
    value=""
    name="email"
    helperText="Prueba"
    onChange={action("Changed")}
    label="Email"
  >
    ...
  </TextInput>
));

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
