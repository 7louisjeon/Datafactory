import React from 'react'
import './Body2.css'
import Row from './Row'

function Body2( {data, setData} ) {
  const arr = new Array(400);
  arr.fill("A", 0, data[0][1]);
  arr.fill("B", data[0][1], data[0][1] + data[1][1]);
  arr.fill("C", data[0][1] + data[1][1], data[0][1] + data[1][1] + data[2][1]);
  arr.fill("D", data[0][1] + data[1][1] + data[2][1], data[0][1] + data[1][1] + data[2][1] + data[3][1]);
  arr.fill("none", data[0][1] + data[1][1] + data[2][1] + data[3][1] , 400);
  console.log(arr);

  return (
    <div className="body2">
      <div className="body2Left">
        <div className="lineGraph">
          {arr.map((x) => <Row cls={x}/>)}
        </div>
        <button className="btn">Reset</button>
      </div>
      <div className="body2Middle">
        <div className="lineGraph lineGraphMiddle">
          <div className="bar bar1" style={{height: `${data[0][1]*4}px`, marginTop: `${400-data[0][1]*4}px`, backgroundColor: 'var(--A)' }}></div>
          <div className="bar" style={{height: `${data[1][1]*4}px`, marginTop: `${400-data[1][1]*4}px`, backgroundColor: 'var(--B)'}}></div>
          <div className="bar" style={{height: `${data[2][1]*4}px`, marginTop: `${400-data[2][1]*4}px`, backgroundColor: 'var(--C)'}}></div>
          <div className="bar" style={{height: `${data[3][1]*4}px`, marginTop: `${400-data[3][1]*4}px`, backgroundColor: 'var(--D)'}}></div>
        </div>
        <div className="dataNames">
          <h3 className="dataName1" style={{color: 'var(--A)'}}>{data[0][0]}</h3>
          <h3 className="dataName2" style={{color: 'var(--B)'}}>{data[1][0]}</h3>
          <h3 className="dataName3" style={{color: 'var(--C)'}}>{data[2][0]}</h3>
          <h3 className="dataName4" style={{color: 'var(--D)'}}>{data[3][0]}</h3>
        </div>
      </div>
      <div className="body2Right">
        <div className="lineGraph">
          <div className="box box1" style={{position: "absolute",border: '1px solid var(--A)',color: "var(--A)", zIndex: "1", width: `${Math.sqrt(data[0][1]/100)*400}px`, height: `${Math.sqrt(data[0][1]/100)*400}px`}}>{data[0][1]}</div>
          <div className="box box2" style={{color: "var(--B)",position: "absolute", border: '1px solid var(--B)', zIndex: "1", width: `${Math.sqrt(data[1][1]/100)*400}px`, height: `${Math.sqrt(data[1][1]/100)*400}px`}}>{data[1][1]}</div>
          <div className="box box3" style={{color: "var(--C)", position: "absolute", border: '1px solid var(--C)', zIndex: "1", width: `${Math.sqrt(data[2][1]/100)*400}px`, height: `${Math.sqrt(data[2][1]/100)*400}px`}}>{data[2][1]}</div>
          <div className="box box4" style={{color: "var(--D)", position: "absolute", border: '1px solid var(--D)', zIndex: "1", width: `${Math.sqrt(data[3][1]/100)*400}px`, height: `${Math.sqrt(data[3][1]/100)*400}px`}}>{data[3][1]}</div>
        </div>
      </div>
    </div>
  )
}

export default Body2 
