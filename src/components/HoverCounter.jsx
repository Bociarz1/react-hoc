import React, {Component} from "react";
import withCounter from "../hocComponents/withCounter";

class HoverCounter extends Component {
  render() { 
    const {incrementCount, count} = this.props
    return ( 
      <>
      <span onMouseMove={incrementCount}>Hover {count} times</span>
      </>
     );
  }
}
 
export default withCounter(HoverCounter);