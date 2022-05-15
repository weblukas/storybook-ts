import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';
import SvgComp from './SvgComp';
import React from 'react';



export default {
    component: SvgComp,

    title: 'SvgComp',
} as ComponentMeta<typeof SvgComp>;


const Template: ComponentStory<typeof SvgComp> = (args) => <SvgComp {...args} />;

export const Svg = Template.bind({})