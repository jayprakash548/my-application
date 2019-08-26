import React from 'react'

const App = () =>{
  let handlieClick = (e)=>{
    //e.preventDefault();
    console.log("You Clicked");
  }
  return(
    <>
      <h1>Hello Jay</h1>
      <a href="https://www.google.com/" onClick={handlieClick}>Click Me</a>
    </>
  )
}

export default App;