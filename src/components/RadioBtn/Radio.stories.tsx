import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';
import Radio from './Radio';
import React from 'react';

export default {
    component: Radio,
    title: 'Radio',
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Main = Template.bind({});
Main.args = {
    label: 'Button',
};
