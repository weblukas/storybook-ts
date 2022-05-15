import IRadio from './Radio.d';
import React, { FC, useRef, useState } from 'react';
import cn from 'classnames';

const wrapperClassName = 'radio';

const Radio: FC<IRadio> = ({ color, label, size }) => {
    // const radioRef = useRef<HTMLInputElement>(null);
    // const radioValue = radioRef.current?.value
    const [selectedRadio, setSelectedRadio] = useState('radio1')
    const isRadioChecked = (value: string): boolean => selectedRadio === value;
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => 
    setSelectedRadio(e.currentTarget.value)
    return (
        <div className={cn(wrapperClassName)}>
            <label htmlFor='radio'>{label}</label>
            <input 
            type='radio'
            name='radio-btn'
            value='radio1'
            checked={isRadioChecked('radio1')}
            onChange={handleClick}
            />
        </div>
    );
};

export default Radio;

{/* <input type="radio" ref={radioRef} /> */}