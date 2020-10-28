import React from 'react'
import './Data.css'
import Slider from '@material-ui/core/Slider'

function Data3({data, setData}) {
  const handleChange = (e) => {
    setData([data[0], data[1], [data[2][0], e.target.value], data[3]])
  }

  const handleDataNameChange = (e) => {
    setData([data[0], data[1], [e.target.value, data[2][1]], data[3]])
  }

  return (
    <div className="data data3">
      <input type="text" placeholder="Dataname" style={{marginRight: "10px", color: 'var(--C)', borderColor: 'var(--C)'}} onChange={handleDataNameChange}/>
      <h1 style={{color: 'var(--C)'}}>:</h1>
      <input value={data[2][1]} type="text" placeholder="Value" style={{width: "200px", marginLeft: "10px", color: 'var(--C)', borderColor: 'var(--C)'}} onChange={handleChange}/>
      <Slider value={data[2][1]} aria-labelledby="continuous-slider" style={{width: "450px", color: "var(--C)", marginTop: "10px", marginLeft: "30px"}} onChange={handleChange} />
    </div>
  )
}

export default Data3
