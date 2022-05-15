import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { BUTTON_SIZE } from '../enums';
export default {
  title: 'Example/Button',
  component: Button,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: BUTTON_SIZE.LARGE,
  label: 'Button',
  color: 'grey'
};
export const Medium = Template.bind({});
Medium.args = {
  size: BUTTON_SIZE.MEDIUM,
  label: 'Button',
  color: 'green'
};

export const Small = Template.bind({});
Small.args = {
  size: BUTTON_SIZE.SMALL,
  label: 'Button',
};

