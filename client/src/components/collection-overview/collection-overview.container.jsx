import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux';
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collection-overview.component'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

export const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)