import React from "react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(withKnobs);
addDecorator((Story) => (
  <div style={{ font: "12px / 1.41667 tahoma,helvetica,arial,sans-serif", padding: 20 }}>
    <Story />
  </div>
));
