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
        let words = 'words' + Number(columnIndex+1);
        let vector = 'vector' + Number(columnIndex+1);
        console.log(row,columnIndex,"row-------------------")
        console.log(row[words],row[vector],"row-------------------")

        self.props.changePopup(row[words], true, false, '');
      }
    };
    return (
      <div>
        <BootstrapTable data={this.props.result} striped={true} hover={true} options={options}>
            
          <TableHeaderColumn 
            dataField="sentence1"
            isKey={true}
            dataAlign="center" 
            dataSort={true}>
              1
          </TableHeaderColumn>
          <TableHeaderColumn dataField="sentence2" dataSort={true}>2</TableHeaderColumn>
  
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