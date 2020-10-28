import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Body1 from './Body1'
import Body2 from './Body2'

function App() {
  const [data, setData] = useState(
    [[null, 50], [null, 50], [null, 50], [null,50]]);
  return (
    <div className="app">
      <Header/>
      <Body1 data={data} setData={setData}/>
      <Body2 data={data} setData={setData}/>
    </div>
  );
}

export default App;
