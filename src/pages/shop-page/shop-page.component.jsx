import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import {ShopPageContainer} from './shop-page.component.styles'

import {CollectionPageContainer} from '../../pages/collection/collection.container'
import {CollectionOverviewContainer}  from '../../components/collection-overview/collection-overview.container'

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
                <Route 
                    exact path={`${match.path}`} 
                    component={CollectionOverviewContainer}
                />
                <Route  
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}
                />
            </ShopPageContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps)(ShopPage)

