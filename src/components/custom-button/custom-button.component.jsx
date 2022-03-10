import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogle, ...otherProps}) => (
    <button className = {`${isGoogle ? 'isGoogle' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;