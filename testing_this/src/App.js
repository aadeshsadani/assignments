import React, { Component } from 'react'

export default class bind extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
      }
      textChange(e){
        console.log(this);
        this.setState({counter:e.target.value})
      }
    render() {
    return (
      
      <>
      {/*<button onClick={this.textChange}>submit</button> */}
      <input onChange={this.textChange}/>
      <p>{this.state.counter}</p></>
    )
  }
}
