import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'

import {ShopPageContainer} from './shop-page.component.styles'

import { Route } from 'react-router-dom';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };
    
    unSubscribeFromSnapShot = null;
    
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
          });
        }
    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <ShopPageContainer>
                <Route 
                exact path={`${match.path}`} 
                render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </ShopPageContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
})
export default connect(null, mapDispatchToProps)(ShopPage)

