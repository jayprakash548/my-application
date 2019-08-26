
import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: 'Jay Singh',
      Company: 'TechSci Research'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    // handleClick = () =>{
      //console.log("You have clicked", this);
    //}
    console.log("You have clicked", this);
  }
  render(){
    return(
      <>
        <h1>Hello Jay! you name{this.state.name} and Cpmpany Name {this.state.Company}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    )
  }
}

export default App