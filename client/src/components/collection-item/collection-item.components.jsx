import React from 'react';
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions.js'

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles.jsx';

const CollectionItem = ({item, addItem}) => {
    const {id, imageUrl, name, price} = item;
    
    return (
        <CollectionItemContainer key={id}>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer> {name} </NameContainer>
                <PriceContainer> {price}$ </PriceContainer>
            </CollectionFooterContainer>
        <AddButton 
            styles='invertedButtonStyle' 
            onClick = {() => addItem(item)}> 
            ADD TO CART 
        </AddButton>
        </CollectionItemContainer>
        )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);