import IBadge from './Badge.d';
import React, { FC } from 'react';
import cn from 'classnames';

const styles = {
    color: 'green',
    width: '24px',
    height: '24px'
}
const Badge: FC<IBadge> = ({
    color,
    label,
    size,
}) => (
    <div className={cn(styles.height, styles.color, styles.width)}>
        {label}
    </div>
);

export default Badge;
