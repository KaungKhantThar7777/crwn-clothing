import React from "react";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";
import "./collection-overview.styles.scss";
function CollectionOverview({ collections }) {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...other }) => (
        <CollectionPreview key={id} {...other} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
