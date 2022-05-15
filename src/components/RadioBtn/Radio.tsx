import IRadio from './Radio.d';
import React, { FC, useRef } from 'react';
import cn from 'classnames';

const wrapperClassName = 'radio';

const Radio: FC<IRadio> = ({ color, label, size }) => {
    const radioRef = useRef<HTMLInputElement>(null);
    const radioValue = radioRef.current?.value
    return (
        <div className={cn(wrapperClassName)}>
            <label htmlFor='radio'>{label}</label>
            <input type="radio" ref={radioRef} />
        </div>
    );
};

export default Radio;
