import React from 'react';
import { CustomButtonContainer } from './custom-button.styles.jsx'

export const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;