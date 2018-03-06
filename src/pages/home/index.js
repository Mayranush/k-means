import React from "react";
import {Header} from "../../components/header/header";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./home.scss";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <textarea rows="4" cols="50" placeholder="Insert your data here"/>
          <textarea rows="4" cols="50">
          a,able,about,across,after,all,almost,also,am,among,an,and,any,are,as,at,be,because,been,but,by,can,cannot,could,dear,did,do,does,either,else,ever,every,for,from,get,got,had,has,have,he,her,hers,him,his,how,however,i,if,in,into,is,it,its,just,least,let,like,likely,may,me,might,most,must,my,neither,no,nor,not,of,off,often,on,only,or,other,our,own,rather,said,say,says,she,should,since,so,some,than,that,the,their,them,then,there,these,they,this,tis,to,too,twas,us,wants,was,we,were,what,when,where,which,while,who,whom,why,will,with,would,yet,you,your
          </textarea>
          <input type="checkbox" name="lemmatize" value="lemmatize" checked/> lemmatize
          <label for="cluster-count">Number of clusters to generate</label>
          <input type="number" name="cluster-count" id="cluster-count" defaultValue={2}/>
          <button type="button">CLUSTER!</button>

        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.projectDataReducer}),
  {...projectDataActions}
)(Home);