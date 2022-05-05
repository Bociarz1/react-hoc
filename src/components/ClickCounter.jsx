import React, {Component} from "react";
import withCounter from "../hocComponents/withCounter";

class ClickCounter extends Component {
  render() { 
    const {incrementCount, count} = this.props
    return ( 
      <>
      <button onClick={incrementCount}> Clicked {count} times</button>
      </>
     );
  }
}
 
export default withCounter(ClickCounter);