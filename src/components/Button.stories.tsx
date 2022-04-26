import Button from "./Button";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />


export const Green = Template.bind({})

Green.args = {
  backgroundColor: 'green',
  label: "click",
  width: '200px'
}

export const Black = Template.bind({})

Black.args = {
  backgroundColor: 'black'
}






// export default {
//     component: Button,
//     title: 'Button',
//     decorators: []
// } as ComponentMeta<typeof Button>

// const Template: ComponentStory<typeof Button> = args => <Button {...args} />

// export const GreyButton = Template.bind({})

// GreyButton.args = {
//    label: 'click',
//    size: 'md'
// }

// export const Knobs = () =>{
//     <Button>
//         {text("Label", 'button Label')}
//     </Button>
// }