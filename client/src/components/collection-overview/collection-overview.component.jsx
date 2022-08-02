import React from 'react';
import { createStructuredSelector } from "reselect"
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { CollectionsOverviewContainer } from './collection-overview.styles';


export const CollectionsOverview = ({ collections }) => {
  return(
    <CollectionsOverviewContainer>
      {
        Object.entries(collections).map(item => (
          <CollectionPreview key={item[0]} title={item[0]} items={item[1]} routeName={item[0]}/>
        ))
      }
    </CollectionsOverviewContainer>
  )};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)