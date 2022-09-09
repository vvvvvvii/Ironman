import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <div>
        <p>{this.props.data}</p>
        <button onClick={()=>this.props.handleData("子元件")}>Change</button>
      </div>
    )
  }
}

export default Child
