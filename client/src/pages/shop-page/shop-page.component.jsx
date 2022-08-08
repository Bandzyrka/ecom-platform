import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import { ShopPageContainer } from "./shop-page.component.styles";

import Spinner from "../../components/spinner/spinner.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

const CollectionPage = lazy(() =>
  import("../../pages/collection/collection.component")
);
const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview.container")
);

export class ShopPage extends React.Component {
  unSubscribeFromSnapShot = null;
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  render() {
    return (
      <ShopPageContainer>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route index element={<CollectionOverviewContainer />} />
              <Route path=":category" element={<CollectionPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </ShopPageContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
