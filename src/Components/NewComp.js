import React, { Component } from 'react'
import BellA from './BellA.svg'
import BellB from './BellB.svg'

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to Mahiboob Ali",
         sub: "Subscribe",
         imageURL: BellA
      }
    }
    styles={
        fontStyle: "italic",
        color: "purple"
      }
    ButtonChange=()=>{
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed"
        })
    }
    imageChange=()=>{
        this.setState({
            imageURL: BellB,
            message: "Thank you happy learning!!"
        })
    }
  render() {
    return (
      <div className="App" >
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p />
        <img 
            style={{width: "50px", height: "50px"}} 
            src={this.state.imageURL} 
            onClick={this.imageChange}
            alt='' 
        /> 
      </div>
    )
  }
}
export default NewComp
