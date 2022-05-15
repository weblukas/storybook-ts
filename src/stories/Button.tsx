import React from 'react';
import './button.css';
import { BUTTON_SIZE } from '../enums';
interface ButtonProps {
    primary?: boolean;
    size?: BUTTON_SIZE;
    label: string;
    color: string;
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = false,
    size = BUTTON_SIZE.LARGE,
    label: _label,
    color,
    ...props
}: ButtonProps) => {
    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary';
    const isLabelSmall = size === BUTTON_SIZE.SMALL;
    const label = isLabelSmall ? '' : _label;

    return (
        <button
            type="button"
            className={[
                'storybook-button',
                `storybook-button--${size}`,
                `storybook-button--${color}`,
                mode,
            ].join(' ')}
            {...props}
        >
            {label}
        </button>
    );
};
