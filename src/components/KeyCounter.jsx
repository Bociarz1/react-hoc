import React, {Component} from "react";
import withCounter from "../hocComponents/withCounter";

class KeyCounter extends Component {
  render() { 
    const {incrementCount, count} = this.props
    return ( 
      <>
      <label>Upwards Arrow Key has been pressed {count} times</label>
      <input onKeyDown={
        (event) => {
          if (event.keyCode === 38) return incrementCount()
        }
      }/>
      </>
     );
  }
}
 
export default withCounter(KeyCounter);