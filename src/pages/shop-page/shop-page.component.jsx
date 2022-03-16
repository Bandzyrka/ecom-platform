import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { createStructuredSelector } from "reselect"
import { shopSelectColecctions } from '../../redux/shop/shop.selectors.js';
import { connect } from 'react-redux';


const ShopPage = ({collections}) => (    
    <div className="shop-page">
        {
        collections.map(({id, ...otherSectionProps}) =>
        (
            <CollectionPreview key={id} {...otherSectionProps} />
        ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: shopSelectColecctions
})
export default connect(mapStateToProps)(ShopPage);

