import React, { Component } from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import {ShopPageContainer} from './shop-page.component.styles'
import { Route } from 'react-router-dom';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions'

class ShopPage extends Component {
    unSubscribeFromSnapShot = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
    })
    }
    render(){
        const { match } = this.props;
        return (
            <ShopPageContainer>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </ShopPageContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
})
export default connect(null, mapDispatchToProps)(ShopPage)

