import React, { Component } from 'react'
import Child from './Child'
export class Booking2 extends Component {
  state = {
    num: 0,
    data: "父元件",
  }
  handleNum(type){
    if(type=== 'minus'){
      this.setState({
        ...this.state,
        num: 0
      })
    }else{
      this.setState({
        ...this.state,
        num: this.state.num+1
      })
    }
  }
  handleData(childData){
    this.setState({
      ...this.state,
      data: childData
    })
  }
  // componentDidUpdate(){
  //   console.log('re render')
  // }
  render() {
    return (
      <div>
        <p>加盟店訂位人數</p>
        <button onClick={()=>this.handleNum('minus')}>-</button>
        {this.state.num}
        <button onClick={()=>this.handleNum('plus')}>+</button> 
        <Child data={this.state.data} handleData={this.handleData.bind(this)}></Child>
      </div>
    )
  }
}

export default Booking2
