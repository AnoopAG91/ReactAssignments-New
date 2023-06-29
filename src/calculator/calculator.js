import React, { useState } from 'react'

function Calculator() {
    const [input1,setInput1]=useState("")
    const [input2,setInput2]=useState("")
    const [result,setResult]=useState("")

    function deleteAll(){
        setInput1("")
        setInput2("")
        setResult("")
    }
  return (
    <div>
        <h1>Calculator</h1>
        <input type="number" value={input1} onChange={(e)=>setInput1(e.target.value)}/>
        <input type="number" value={input2} onChange={(e)=>setInput2(e.target.value)}/>
        <br/><br/>
        <button onClick={()=>setResult(parseInt(input1) + parseInt(input2))}>Add</button> {/*parseInt used to convert string into number*/}
        <button onClick={()=>setResult(input1-input2)}>Substract</button>
        <button onClick={()=>setResult(input1/input2)}>Division</button>
        <button onClick={()=>setResult(input1*input2)}>Multiply</button>
        <br/><br/>
        <button onClick={deleteAll}>Delete</button>
        <h1>{result}</h1>
    </div>
  )
}

export default Calculator