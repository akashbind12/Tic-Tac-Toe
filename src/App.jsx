import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState(true)
  const [box, setBox] = useState({
    "one" : "",
    "two" : "",
    "three": "",
    "four": "",
    "five": "",
    "six": "",
    "seven": "",
    "eight": "",
    "nine" : ""
  })
  
  const handlechange = (e) =>{
    console.log(box[e])
    if (box[e] == "") {
      setState(!state)
        setBox({
          ...box,
          [e]: state ? "O" : "X"
        })
        console.log(box)
    }
  }

  const handlrestart = () => {
    setBox({
      "one" : "",
      "two" : "",
      "three": "",
      "four": "",
      "five": "",
      "six": "",
      "seven": "",
      "eight": "",
      "nine" : ""
    })
  }
  
   //checking for "O" winning condition
  if (  //checking for horizontal rows
       (box.one == "O" && box.two == "O" && box.three == "O")
    || (box.four == "O" && box.five == "O" && box.six == "O")
    || (box.seven == "O" && box.eight == "O" && box.nine == "O")
       //checking for diagonals
    || (box.one == "O" && box.five == "O" && box.nine == "O")
    || (box.three == "O" && box.five == "O" && box.seven == "O")
       //checking for vertical rows
    || (box.one == "O" && box.four == "O" && box.seven == "O")
    || (box.two == "O" && box.five == "O" && box.eight == "O")
    || (box.three == "O" && box.six == "O" && box.nine == "O")) {
    return (
      <>
        <h1 className='win' >player O is WINNER !</h1>
        <div className='btn-div'>
            <button className='Button' onClick={handlrestart} >Restart</button>
        </div>
      </>)
  }
  
   //checking for "X" winning condition
  if ( //checking for horizontal rows
    (box.one == "X" && box.two == "X" && box.three == "X")
  || (box.four == "X" && box.five == "X" && box.six == "X")
  || (box.seven == "X" && box.eight == "X" && box.nine == "X")
       //checking for diagonals
  || (box.one == "X" && box.five == "X" && box.nine == "X")
  || (box.three == "X" && box.five == "X" && box.seven == "X")
      //checking for vertical rows
  || (box.one == "X" && box.four == "X" && box.seven == "X")
  || (box.two == "X" && box.five == "X" && box.eight == "X")
  || (box.three == "X" && box.six == "X" && box.nine == "X")) {
    return (
           <>
            <h1 className='win' >player X  is WINNER !</h1>
            <div className='btn-div'>
            <button className='Button' onClick={handlrestart} >Restart</button>
            </div>
          </>)
}
  
  //checking for "Draw"  condition
  if( box.one != "" && box.two != "" && box.three != ""
  && box.four != "" && box.five != "" && box.six != ""
    && box.seven != "" && box.eight != "" && box.nine != "") {
      return (
        <>
         <h1 className='win' >DRAW !</h1>
         <div className='btn-div'>
         <button className='Button' onClick={handlrestart} >Restart</button>
         </div>
       </>)
  }


  return (
    <div className="App">  
      <div className='row'>
        <div id="one" onClick={() => handlechange("one")} >{ box.one}</div>
        <div id="two" onClick={() => handlechange("two")}  >{ box.two}</div>
        <div id="three" onClick={() => handlechange("three")} >{ box.three}</div>
      </div>
      <div className='row' >
        <div onClick={() => handlechange("four")} >{ box.four}</div>
        <div onClick={() => handlechange("five")} >{ box.five}</div>
        <div onClick={() => handlechange("six")} >{ box.six}</div>
      </div>
      <div className='row' >
        <div onClick={() => handlechange("seven")} >{ box.seven}</div>
        <div onClick={() => handlechange("eight")} >{ box.eight}</div>
        <div onClick={() => handlechange("nine")} >{ box.nine}</div>
       </div>
    </div>
  )
}

export default App
