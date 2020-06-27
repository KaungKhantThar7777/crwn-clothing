import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div>
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
