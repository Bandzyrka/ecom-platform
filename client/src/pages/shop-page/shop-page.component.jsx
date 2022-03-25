import React, {lazy, Suspense} from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import {ShopPageContainer} from './shop-page.component.styles'

import Spinner from '../../components/spinner/spinner.component'

const CollectionPageContainer = lazy(() => import('../../pages/collection/collection.container'))
const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'))

class ShopPage extends React.Component {
    unSubscribeFromSnapShot = null;
    componentDidMount() {
        const { fetchCollectionsStart } = this.props
        fetchCollectionsStart()
        }
    render(){
        const { match } = this.props;
        return (
            <ShopPageContainer>
            <Suspense fallback={ <Spinner />}> 
                <Route 
                    exact path={`${match.path}`} 
                    component={CollectionOverviewContainer}
                />
                <Route  
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}
                />
            </Suspense>
            </ShopPageContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps)(ShopPage)

