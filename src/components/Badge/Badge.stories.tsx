import { ComponentMeta, ComponentStory } from '@storybook/react';
import Badge from './Badge';
import React from 'react';

export default {
    component: Badge,
    decorators: [
        (Story) => (
            <div
                style={{
                    font: '12px / 1.41667 tahoma,helvetica,arial,sans-serif',
                }}
            >
                <Story />
            </div>
        ),
    ],
    title: 'Badge',
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Main = Template.bind({});
Main.args = {
    label: '2',
};
