import React from "react";
import Button from "../Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";


export default {
    title: 'Nbutton',
    component: Button,

    argTypes: {
        variant: {
          options: ['primary', 'secondary'],
          control: { type: 'radio' },
        },
      }
    
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const PrimaryA = Template.bind({})



export const Primary = {
    args: {
      variant: 'primary',
      
    },
  };
Primary.args = {
    variant: 'primary',
  };
  
