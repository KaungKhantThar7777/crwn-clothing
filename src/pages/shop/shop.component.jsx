import React, { Component } from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";
class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...other }) => (
          <CollectionPreview key={id} {...other} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
