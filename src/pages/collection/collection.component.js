import React from "react";
import './collection.styles.scss'
import {connect} from 'react-redux';
import {shopSelectCollection} from '../../redux/shop/shop.selectors'


const CollectionPage = ({ match, collection }) => (
    <div className="collection-page">
     <h1>Category {collection.title}</h1>
    </div>
)


const mapStateToProps = (state, ownProps) => ({
    collection: shopSelectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);