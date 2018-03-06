import React from "react";
import {Header} from "../../components/header/header";
import {connect} from "react-redux";
import {generalActions} from "../../actions/index";


export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.cluster(this.props.data);
  };

  render() {
    console.log(this.props.result);
    return (
      <div>
        <Header />
        <div></div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.general, result: state.result}),
  {...generalActions}
)(About);