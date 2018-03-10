import React from "react";
import {connect} from "react-redux";
import {generalActions, popupActions} from "../../actions/index";

export class Clustered extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this;
    let options = {
      onRowClick: function (row, columnIndex) {
        let info = [];
        let words="words"+columnIndex;
        let vector="vector"+columnIndex;
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
        self.props.changePopup('info', true, false, '', info);
      }
    };

    return (
      <div className="tbl">
        <BootstrapTable tableStyle={{width: 'calc(100vw - 150px )'}} height={170} data={this.props.result.data} striped={true}
                        hover={true}
                        options={options} exportCSV>
          {   this.props.result.clusters.map((item,i) => {
            return (
              <TableHeaderColumn thStyle={ {whiteSpace:'normal', width: 'calc((100vw - 150px)/5 )', maxHeight: '50px'} }
                                 tdStyle={ { width: 'calc((100vw - 150px)/5 )', maxHeight: '50px'} }
                                 key={i}
                                 dataField={"sentence" + i} isKey={i === 0 ? true : false} columnTitle={true}>
                { "Sentence Cluster " + (i + 1)+" ("+item+")"}
              </TableHeaderColumn>)
          })}
        </BootstrapTable>
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