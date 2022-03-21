import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'

import {ShopPageContainer} from './shop-page.component.styles'

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'

import { createStructuredSelector } from 'reselect'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    unSubscribeFromSnapShot = null;
    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props
        fetchCollectionStartAsync()
        }
    render(){
        const { match, isCollectionFetching } = this.props;
        return (
            <ShopPageContainer>
                <Route 
                exact path={`${match.path}`} 
                render={props => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
            </ShopPageContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
   fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)

