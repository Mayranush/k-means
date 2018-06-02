import React from "react";
import "./loader.scss";
import PropTypes from "prop-types";

export class Loader extends React.Component {
  constructor(props) {
    super(props);
  }


  static propTypes = {
    loader: PropTypes.bool
  };

  render() {
    return (
      <div className="general-div">
        {this.props.loader && <div className="text-block-loader">
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>}
      </div>
    )
  }
}

