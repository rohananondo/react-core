import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './assets/Counter'
import Button from './assets/Button'
import Team from './Team'
import Users from './Users'
import Friends from './Friend'

function App() {
  function handelClick(){
    alert('button clicked')
  }
  const buttonClicked=()=>{
    alert('Jilani Bainchod')
  }
  const button=(num)=>{
    alert(num+50);
  }

  return (
    <>
      
      <h3>Core React </h3>
      <Users></Users>
      {/* <Counter></Counter> */}
      <button onClick={handelClick}>Click Me</button>
      <button onClick={buttonClicked}>Click Me</button>
      <button onClick={()=>{alert('clicked dont move')}}>Alert</button>
      <button onClick={()=>button(10)}>Click here</button>

      <Button></Button>
      <Team></Team>
      <Friends></Friends>
     
       
    </>
  )
}

export default App
