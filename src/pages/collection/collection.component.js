import React from "react";
import './collection.styles.scss'
import {connect} from 'react-redux';
import {shopSelectCollection} from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection-item/collection-item.components'


const CollectionPage = ({ match, collection: {title, items} }) => (
    <div className="collection-page">
        <div className="title">{title}</div>
        <div className="items"> 
            {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>
)


const mapStateToProps = (state, ownProps) => ({
    collection: shopSelectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);