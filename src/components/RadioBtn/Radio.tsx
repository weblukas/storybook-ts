import IRadio from './Radio.d';
import React, { FC, useState} from 'react';
import cn from 'classnames';

const wrapperClassName = 'radio';

const Radio: FC<IRadio> = ({ color, label, size }) => {
const [value, setValue] = useState()

    return (
        <div className={cn(wrapperClassName)}>
            <input type="radio" value={value}  />
            {label}
        </div>
    );
};

export default Radio;
