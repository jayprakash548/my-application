import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Jay Prakash',
      roll: this.props.roll
    }
  }
  eventHandler = ()=>{
    /* this.setState(
      {
        name: 'Sony', 
        roll:'567'
      }
    ); */
    this.setState((state, props) =>{
      // console.log(state.name);
      console.log(props.roll);
    });
  }
  render(){
    return(
      <>
        <h1>Event Example {this.state.name} and you roll is: {this.state.roll}</h1>
        <button onClick={this.eventHandler}>Click Me</button>
      </>
    );
  }
}
export default App;