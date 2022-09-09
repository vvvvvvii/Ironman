import React, { Component } from 'react'
export class Booking2 extends Component {
  state = {
    data: 'data'
  }
  handleClick(){
    this.setState({
      ...this.state,
      data: 'new data'
    })
  }
  
  render() {
    return (
      <div>
        <p>開啟 console 面板</p>
        <button onClick={()=>this.handleClick()}>click</button>
      </div>
    )
  }
}

export default Booking2
