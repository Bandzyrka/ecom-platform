import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogle, inverted, ...otherProps}) => (
    <button className = {`${inverted ? 'inverted' : ''} custom-button ${isGoogle ? 'isGoogle' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;