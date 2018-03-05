
import React from 'react';
import {Header} from '../../components/header/header';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import "./home.scss";
import { Link } from 'react-router/es6';

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />    
        <div>Home</div>
      </div>
    )
  }
}

export default connect(
  state => ({ data:  state.projectDataReducer }),
  { ...projectDataActions }

)(Home);