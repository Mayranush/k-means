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
        row.words.map((v,i) => { 
          row.vector.map((k,j) => {
            if (i===j){
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
    let width = (window.innerWidth - 17 ) / this.props.result.data.length;
    return (
      <div>
        { this.props.result.data.map((item, i) => {
          return (
            <div key={i} style={{"width": width, "float": "left"}}>
              <BootstrapTable height={174} data={item.sentences} striped={true} hover={true} options={options}>
                <TableHeaderColumn tdStyle={ {height: 45} } dataField="sentence" isKey={true}>
                  Cluster {item.cluster}
                </TableHeaderColumn>
              </BootstrapTable>
            </div>
          )
        })}
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