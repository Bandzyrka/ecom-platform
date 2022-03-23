import React from 'react';
import { withRouter } from 'react-router-dom';

import {MenuItemContainer, BackgroundImageContainer, ConentContainer, TitleContainer, SubtitleContainer} from './menu-item.styles.jsx'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer 
        size={size}  
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    > 
        <BackgroundImageContainer 
        className = 'background-image' 
        imageUrl = {imageUrl} 
        />
        
        <ConentContainer className='content'> 
            <TitleContainer>  
                {title.toUpperCase()} 
            </TitleContainer>
                
            <SubtitleContainer> 
                SHOP NOW! 
            </SubtitleContainer>
        </ConentContainer>
    
        </MenuItemContainer>
    )

export default withRouter(MenuItem);