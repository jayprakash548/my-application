import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "Jay Prakash",
      newName: this.props.name
  
    }
  }  
  render(){
    return(
      <h1>Hello {this.state.name} and new name is {this.state.newName}</h1>
    )
  }
}

export default App
 