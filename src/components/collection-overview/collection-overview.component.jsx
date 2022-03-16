import React from 'react';
import { createStructuredSelector } from "reselect"
import { shopSelectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'



const CollectionOverview = ({ collections }) =>{
 
    return(
    <div className="collection-overview">
    {
        collections.map(({id, ...otherSectionProps}) =>
        (
            <CollectionPreview key={id} {...otherSectionProps} />
        ))
    }
    </div>
    
    )
}

const mapStateToProps = createStructuredSelector({
    collections: shopSelectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview)