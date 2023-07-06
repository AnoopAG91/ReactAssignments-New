import React, { useState } from 'react'
import './table.css'

function Table() {
    const [number,setNumber]=useState('') // this is for adding and updating the number which will enter in the input field.
    const[table,setTable]=useState([])   // this usestate is for the table rows.

    function handleNumber(e){    // this function will take e(event) as an argument
        const {value} = e.target;  // input datas get stored in to {value} variable
        setNumber(value)           // updates the values to the number.
        generateTable(value)       // generateTable is another function which also takes the value to create table rows
    }
    function generateTable(number){    // creating the generateTable function to create the rows.
        const data = []               // creating an empty array to store the rows
        for(let i=1; i <=number; i++){   // running a for loop which iterates from 1. and increases by one.
            data.push(<tr key={i}><td>{i}</td></tr>)  // data.push will push the table to the array which is data. and the key for unique key and {i} for the value.
        }
        setTable(data)  // then updating the table state with the current array. which is data here.
    }
  return (
    <div className='table-wrapper'>
        <h1>Dynamic Table</h1>
        <input type='number' placeholder='type number' value={number} onChange={handleNumber}></input>
        
        <div className='table-data'>
        <tr>
            <td>
                {table}
            </td>
        </tr>
        </div>
    </div>
  )
}

export default Table