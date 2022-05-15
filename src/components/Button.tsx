import React from 'react'
import './button.css'


interface ButtonProps {
    color?: 'defGreen' | 'lightGreen' | 'grey' | 'red' | 'lightRed';
    label: string;
    
}
const Button: React.FC<ButtonProps> = ({color='defGreen', label="button"}) => {
  return (
    <button type='button' className={['storybook-button', `storybook-button--${color}`].join(' ')}>{label}</button>
  )
}


export default Button

