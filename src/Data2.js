import React from 'react'
import './Data.css'
import Slider from '@material-ui/core/Slider'

function Data2({data, setData}) {
  const handleChange = (e) => {
    setData([data[0], [data[1][0], e.target.value], data[2], data[3]])
  }

  const handleDataNameChange = (e) => {
    setData([data[0], [e.target.value, data[1][1]], data[2], data[3]])
  }

  return (
    <div className="data data2">
      <input type="text" placeholder="Dataname" style={{marginRight: "10px", color: 'var(--B)', borderColor: 'var(--B)'}} onChange={handleDataNameChange}/>
      <h1 style={{color: 'var(--B)'}}>:</h1>
      <input value={data[1][1]} type="text" placeholder="Value" style={{width: "200px", marginLeft: "10px", color: 'var(--B)', borderColor: 'var(--B)'}} onChange={handleChange}/>
      <Slider value={data[1][1]} aria-labelledby="continuous-slider" style={{width: "450px", color: "var(--B)", marginTop: "10px", marginLeft: "30px"}} onChange={handleChange} />
    </div>
  )
}

export default Data2
