import React, { Component } from 'react';

const withCounter = (OriginalComponent) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);
    }
    state = { 
      count: 0
    }
    incrementCount = () => {
      this.setState(prevState => {
        return {count:prevState.count+1}
      })
    }  
    render() { 
      return <OriginalComponent 
      count={this.state.count} 
      incrementCount={this.incrementCount}
      {...this.props}
      />
    }
  }
  return WithCounter
}

export default withCounter;