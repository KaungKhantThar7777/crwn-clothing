import React from "react";

import CollectionItem from "../collectionItem/collectionItem.component";
import "./collectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...other }) => (
            <CollectionItem key={id} {...other} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
