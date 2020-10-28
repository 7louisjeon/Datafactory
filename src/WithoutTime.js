import React from 'react'
import Data1 from './Data1'
import Data2 from './Data2'
import Data3 from './Data3'
import Data4 from './Data4'
import './WithTime.css'

function WithoutTime( {data, setData} ) {

  return (
    <div className="withoutTime">
      <h2>Add some data without timeline</h2>
      <Data1 data={data} setData={setData}/>
      <Data2 data={data} setData={setData}/>
      <Data3 data={data} setData={setData}/>
      <Data4 data={data} setData={setData}/>
    </div>
  )
}

export default WithoutTime
