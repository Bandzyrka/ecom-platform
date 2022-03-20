import React from 'react';
import { createStructuredSelector } from "reselect"
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { CollectionsOverviewContainer } from './collection-overview.styles.jsx';


const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)