import React from "react";
import {Header} from "../../components/header/header";
import {connect} from "react-redux";
import {generalActions} from "../../actions/index";
import "./home.scss";
import {Link} from "react-router/es6";
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

  }

  render() {
    return (
      <div>
        <div className="cluster-form">
          <textarea className="form-control" rows="4" cols="50" placeholder="Insert your data here" onChange={(e) => this.props.changeText(e.target.value)} value = {this.props.data.text} />
          <textarea className="form-control" rows="6" cols="50" onChange={(e) => this.props.changeStopWords(e.target.value)} value = {this.props.data.stopWords} />
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="lemmatize" checked={this.props.data.lemmatize} onChange={(e) => this.props.changeLemmatize(e.target.checked)}/>
            <label className="form-check-label" htmlFor="lemmatize">lemmatize</label>
          </div>
          <div className="form-group">
            <label htmlFor="cluster-count">Number of clusters to generate</label>
            <input type="number" className="form-control" name="cluster-count" id="cluster-count" defaultValue={this.props.data.clusterCount} onChange={(e) => this.props.changeClusterCount(e.target.value)}/>
          </div> 
          <Link to="/clustered" className="btn btn-primary" type="button" onClick={this.handleSubmit}>CLUSTER!</Link>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.general}),
  {...generalActions}
)(Home);