import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import {ShopPageContainer} from './shop-page.component.styles'
import { Route } from 'react-router-dom';

const ShopPage = ({match}) => (    
    <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopPageContainer>
)


export default ShopPage

