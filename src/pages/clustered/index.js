import React from "react";
import {connect} from "react-redux";
import {generalActions, popupActions} from "../../actions/index";
import "./clustered.scss";


export class Clustered extends React.Component {
  constructor(props) {
    super(props);
    this.handleExport = this.handleExport.bind(this);
  }

  handleExport() {

    window.open(this.props.result.down_url);
    // this.props.exportToExcel();

  }

  render() {

    let self = this;
    let infoMessage;
    let infoMessageSentenceLemmatized;
    let options = {
      onRowClick: function (row, columnIndex) {
        let info = [];
        let words = "words" + columnIndex;
        let vector = "vector" + columnIndex;
        let cluster = "cluster" + columnIndex;
        let sentenceLemmatized = "sentenceLemmatized" + columnIndex;
        if (row[sentenceLemmatized] && row[sentenceLemmatized] !== "") {
          infoMessageSentenceLemmatized ="Lemnatized: " + row[sentenceLemmatized];
        }
        infoMessage = row[cluster];


        row[words].map((v, i) => {
          row[vector].map((k, j) => {
            if (i === j) {
              let newObj = new Object();
              newObj.word = v;
              newObj.vector = k;
              info.push(newObj);
            }
          });
        });
        self.props.changePopup(infoMessage, true, false, '', info, infoMessageSentenceLemmatized);
      }
    };
    return (
      <div>
        <button className="btn btn-primary export-to-excel" type="button" onClick={this.handleExport}>Export to Excel!
        </button>
        <div className="tbl" style={{"maxHeight": ((this.props.result.data.length + 1) * 40 + 28) + "px"}}>
          <BootstrapTable tableStyle={{width: '100%', height: '100%'}}
                          data={this.props.result.data}
                          striped={true}
                          hover={true}
                          options={options}>
            <TableHeaderColumn autoValue={true} dataField='_id' isKey={true} hidden={true}>Id</TableHeaderColumn>
            {   this.props.result.clusters.map((item, i) => {
              return (
                <TableHeaderColumn
                  thStyle={ {
                    whiteSpace: 'normal',
                    width: 'calc((100vw - 150px)/5 )',
                    maxHeight: '40px'
                  } }
                  tdStyle={ {width: 'calc((100vw - 150px)/5 )', height: '40px'} }
                  key={i}
                  dataField={"cluster" + i}  columnTitle={true}>
                  { "Sentence Cluster " + (i + 1) + " (" + item + ")"}
                </TableHeaderColumn>)
            })}
          </BootstrapTable>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.general, result: state.result}),
  {
    ...generalActions,
    ...popupActions
  }
)(Clustered);