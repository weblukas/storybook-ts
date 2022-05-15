import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,

  argTypes: {
    color: {
      options: ["red", "defGreen"],
      label: { control: "text" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MintBtn = Template.bind({});
MintBtn.args = {
  color: "defGreen",
};

export const MintBtnDanger = Template.bind({});
MintBtnDanger.args = {
  color: "red",
};
