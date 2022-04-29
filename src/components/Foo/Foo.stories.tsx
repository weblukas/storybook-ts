import { ComponentMeta, ComponentStory } from "@storybook/react";
import Foo from "./Foo";
import React from "react";

export default {
  component: Foo,
  decorators: [
    (Story) => (
      <div style={{ font: "12px / 1.41667 tahoma,helvetica,arial,sans-serif" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      options: ["red", "defGreen"],
      defaultValue: "green",
      control: { type: "select" },
    },
  },
  title: "Foo/Foo",
} as ComponentMeta<typeof Foo>;

const Template: ComponentStory<typeof Foo> = (args) => <Foo {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: "Bar",
  variant: 'primary'
};
