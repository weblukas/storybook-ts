import React, {FC}from 'react'
import './nbutton.css'

export interface ButtonProps {
    variant: string,

}

const Nbutton:FC<ButtonProps> = (props) => {
    const { variant , children} = props
  return (
    <button className={`button ${variant} `}>
        {children}
    </button>
  )
}

export default Nbutton