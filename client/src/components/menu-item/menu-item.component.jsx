import React from 'react';
import { useNavigate } from "react-router-dom";

import {MenuItemContainer, BackgroundImageContainer, ConentContainer, TitleContainer, SubtitleContainer} from './menu-item.styles.jsx'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => {
    let navigate = useNavigate();
    return(
    <MenuItemContainer 
        size={size}  
        onClick={() => navigate(`${match.url}${linkUrl}`)}
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
    )}

export default MenuItem;