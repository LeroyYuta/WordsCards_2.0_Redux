import React from 'react';

const Button = ({
    label,
    className,
    onClick
}) => {
    return (
        <button className={className} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {label}
        </button>
    )
}

export default Button;
