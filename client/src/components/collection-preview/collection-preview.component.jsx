import React from 'react';
import CollectionItem from '../collection-item/collection-item.components'
import {CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles.jsx'
import { useNavigate } from "react-router-dom";

export const CollectionPreview = ({title, items, routeName,}) => {
    let navigate = useNavigate();
    return(
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => navigate(`${routeName}`)}>
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {
            items
                .filter((item, index )=> index < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
             ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
    );
}
export default CollectionPreview;