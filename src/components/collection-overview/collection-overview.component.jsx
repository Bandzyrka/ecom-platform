import React from 'react';
import { createStructuredSelector } from "reselect"
import { shopSelectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { CollectionOverviewContainer } from './collection-overview.styles.jsx';


const CollectionOverview = ({ collections }) =>{
 
    return(
    <CollectionOverviewContainer>
    {
        collections.map(({id, ...otherSectionProps}) =>
        (
            <CollectionPreview key={id} {...otherSectionProps} />
        ))
    }
    </CollectionOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: shopSelectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview)