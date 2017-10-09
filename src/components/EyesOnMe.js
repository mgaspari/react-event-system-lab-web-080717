// Code EyesOnMe Component Here
import React from "react";

export default class EyesOnMe extends React.Component{
  fcsMsg = () => {
    console.log("Good!")
  }

  blrMsg = () => {
    console.log("Hey! Eyes on me!")
  }
  render(){
    return(
      <button onFocus={this.fcsMsg} onBlur={this.blrMsg}></button>
    )
  }
}
