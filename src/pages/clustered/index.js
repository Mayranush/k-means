import React from "react";
import {connect} from "react-redux";
import {generalActions, popupActions} from "../../actions/index";

export class Clustered extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  };

  render() {
    console.log(this.props.result, "tttttttttttttttttttt");
    let self = this;
    let options = {
      onRowClick: function (row, columnIndex) {
        let info = 'info' + Number(columnIndex + 1);
        self.props.changePopup('info', true, false, '', row[info]);
      }
    };
    return (

      <div>
        { this.props.result.data.map((item, i) => {
          return (
            <BootstrapTable key={i} height={174} data={item.sentences} striped={true} hover={true} options={options} >
              <TableHeaderColumn tdStyle={ {height: '45'} } dataField="sentence" isKey={true}>
                Cluster {item.cluster}
              </TableHeaderColumn>
            </BootstrapTable>
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