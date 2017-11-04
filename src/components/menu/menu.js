import React from "react";
import { connect } from "react-redux";
import {projectDataActions} from "../../actions/index";
import { Link } from 'react-router/es6';
import "./menu.scss";


export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      console.log(this.props.data, "this props---------------Blog");
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav" >
          <a className="navbar-brand" href="index.html">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                <i className="fa fa-fw fa-dashboard"/>
                <Link className="nav-link-text" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                <i className="fa fa-fw fa-area-chart"/>
                <Link className="nav-link-text" to="/charts">Charts</Link>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                <i className="fa fa-fw fa-table"/>
                <Link className="nav-link-text" to="/tables">Tables</Link>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Settings">
                <i className="fa fa-fw fa-wrench"/>
                <Link className="nav-link-text" to="/settings">Settings</Link>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Adminarea">
                <i className="fa fa-fw fa-wrench"/>
                <Link className="nav-link-text" to="/admin">Admin Area</Link>
              </li>
            </ul>
            <ul className="navbar-nav sidenav-toggler">
              <li className="nav-item">
                <a className="nav-link text-center" id="sidenavToggler">
                  <i className="fa fa-fw fa-angle-left"/>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-fw fa-bell"/>
                  <span className="d-lg-none">Alerts
              <span className="badge badge-pill badge-warning">6 New</span>
            </span>
                  <span className="indicator text-warning d-none d-lg-block">
              <i className="fa fa-fw fa-circle"/>
            </span>
                </a>
                <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                  <h6 className="dropdown-header">New Alerts:</h6>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"/>Status Update</strong>
              </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">You have 155 new tweets
                    </div>
                  </a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item" href="#">
              <span className="text-danger">
                <strong>
                  <i className="fa fa-long-arrow-down fa-fw"/>Status Update</strong>
              </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">Please recharge your acount for further cooperation
                    </div>
                  </a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item" href="#"/>
                  <a className="dropdown-item small" href="#">View all alerts</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                  <i className="fa fa-fw fa-sign-out"/>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
  }

  export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
  )(Menu);