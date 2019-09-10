import React from "react";
import PropTypes from "prop-types";

const IdIcon = (props) => <span>#{props.children}</span>;

IdIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IdIcon;
