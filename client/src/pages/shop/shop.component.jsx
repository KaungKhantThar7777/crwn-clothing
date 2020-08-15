import React, { useEffect, lazy, Suspense } from "react";
import Spinner from "../../components/spinner/spinner.component";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collection`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionStart: (collectionMap) =>
      dispatch(fetchCollectionStart(collectionMap)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
