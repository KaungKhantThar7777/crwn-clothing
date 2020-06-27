import React from "react";

import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/MenuItem.component";
import "./directory.styles.scss";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...others }) => (
        <MenuItem key={id} {...others} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
