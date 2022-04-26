import React from "react";
import Input from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";


export default {
    title: 'Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
        width: {control: {type: 'number', min: 100, max: 200}}
      },
      args: {
        primary: true,
      },
    
}as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Primary: ComponentStory<typeof Input> = Template.bind({})

Primary.args = {
    backgroundColor: 'red',
    label: 'click',
    width: "150px"
}

export const Secondary: ComponentStory<typeof Input> = Template.bind({})
Secondary.args = {
  width: "300px"
}