import React from "react";
import {connect} from "react-redux";
import {generalActions} from "../../actions/index";
import "./home.scss";
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

    this.props.cluster(this.props.data);
  }

  render() {
    return (
      <div>
        <div className="cluster-form">
          <textarea className="form-control" rows="4" cols="50" placeholder="Insert your data here"
                    onChange={(e) => this.props.changeText(e.target.value)} value={this.props.data.text}/>
          <textarea className="form-control" rows="6" cols="50"
                    onChange={(e) => this.props.changeStopWords(e.target.value)} value={this.props.data.stopWords}/>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="kMeans" checked={this.props.data.kMeans}
                   onChange={(e) => this.props.changeKMeans(e.target.checked)}/>
            <label className="form-check-label" htmlFor="kMeans">k-Means</label>
            <input type="checkbox" className="form-check-input" id="lemmatize" checked={this.props.data.lemmatize}
                   onChange={(e) => this.props.changeLemmatize(e.target.checked)}/>
            <label className="form-check-label" htmlFor="lemmatize">lemmatize</label>

          </div>
          <div className="form-group">
            <label htmlFor="cluster-count">Number of clusters to generate</label>
            <input type="number" className="form-control num-input" name="cluster-count" id="cluster-count"
                   defaultValue={this.props.data.clusterCount}
                   onChange={(e) => this.props.changeClusterCount(e.target.value)}/>

            <label htmlFor="simCoefficient">Similarity Coefficient</label>
            <input type="number" className="form-control num-input" name="cluster-count" id="cluster-count"
                   defaultValue={this.props.data.simCoefficient}
                   onChange={(e) => this.props.changeSimCoefficient(e.target.value)}/>
          </div>
          <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>CLUSTER!</button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.general}),
  {...generalActions}
)(Home);