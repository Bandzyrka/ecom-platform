import React from "react";
import {connect} from 'react-redux';
import {shopSelectCollection} from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection-item/collection-item.components'

import {CollectionPageContainer, CollectionTitle, CollectionItemsContainer} from './collection.styles.jsx'

const CollectionPage = ({ collection: {title, items} }) => (
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer> 
            {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </CollectionItemsContainer>
    </CollectionPageContainer>
)


const mapStateToProps = (state, ownProps) => ({
    collection: shopSelectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);