import React from "react";

import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

function ShopPage({ match }) {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collection`}
        component={CollectionPage}
      />
    </div>
  );
}

export default ShopPage;
