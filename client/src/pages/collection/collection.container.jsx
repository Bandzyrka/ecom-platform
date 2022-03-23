import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux';
import WithSpinner  from '../../components/with-spinner/with-spinner.component'
import CollectionPage from './collection.component'
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

export const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)