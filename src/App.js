import React, { Component } from 'react'

class App extends Component{
  state= {
    id: 1,
    name: "Jay Prakash"
  }
  click=(id, f, g)=>{
    console.log("You Clicked", id);
    console.log("Events", f);
    console.log("Value", g);
  }
 /*  handClickArg = (f)=>{  
    this.click(this.state.id, f, '110')
  }; */
  render(){
    return(
      <>
      <h1>Hanle Click:{this.state.name} </h1>
      <button onClick={this.handClickArg=(f)=>{  
    this.click(this.state.id, f, '110')
  }}>Click Me</button>
      </>
    )
  }
}
export default App;