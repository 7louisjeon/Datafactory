import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Body3 from "./Body3";

function App() {
  const [data, setData] = useState([
    [null, 50],
    [null, 50],
    [null, 50],
    [null, 50],
  ]);
  const [data2, setData2] = useState([
    ["Javascript", 12, 33, 74, 40, 67],
    ["Python", 67, 90, 32, 76, 43],
    ["C++", 86, 25, 16, 64, 43],
    ["Ruby On Rails", 44, 52, 65, 25, 23],
    ["Go", 24, 47, 97, 57, 55],
    ["C#", 55, 24, 52, 22, 47],
  ]);

  const [pageNum, setPageNum] = useState(0);
  const [timeNames, setTimeNames] = useState(["T1", "T2", "T3", "T4", "T5"]);

  return (
    <div className="app">
      <Header setPageNum={setPageNum} />
      <Body1
        data={data}
        setData={setData}
        pageNum={pageNum}
        setPageNum={setPageNum}
        data2={data2}
        setData2={setData2}
        timeNames={timeNames}
        setTimeNames={setTimeNames}
      />
      {pageNum == 0 ? (
        <Body2 data={data} />
      ) : (
        <Body3 data={data2} setData={setData2} timeNames={timeNames} />
      )}
    </div>
  );
}

export default App;
