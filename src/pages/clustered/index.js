import React from "react";
import {Header} from "../../components/header/header";
import {connect} from "react-redux";
import {generalActions, popupActions} from "../../actions/index";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export class Clustered extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.cluster(this.props.data);
  };

  render() {
    console.log(this.props.result);
    let self = this;
    let options = {
      onRowClick: function(row, columnIndex) {
        let info = 'info' + Number(columnIndex+1);
        self.props.changePopup('info', true, false, '', row[info]);
      }
    };
    return (
      <div>
        <BootstrapTable data={this.props.result.data} striped={true} hover={true} options={options}>
          {
            this.props.result.count.map((count) => {
              let sentence = 'sentence' + Number(count);
              return(<TableHeaderColumn key={count} dataField={sentence} isKey={count == 1 ? true : false}>cluster {count}</TableHeaderColumn>);
            })
          }
        </BootstrapTable>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.general, result: state.result}),
  {...generalActions,
    ...popupActions}
)(Clustered);