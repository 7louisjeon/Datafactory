import React, { useState } from "react";

function WithTime({ data2, setData2, timeNames, setTimeNames }) {
  const updateData2 = (index1, index2) => (e) => {
    let newArr = [...data2];
    if (parseInt(e.target.value)) {
      newArr[index1][index2] = parseInt(e.target.value);
      console.log(e.target.value);
      setData2(newArr);
    } else {
      alert("Type numbers only for the data values.");
    }
  };

  const updateTitle = (index) => (e) => {
    let newArr = [...data2];
    newArr[index][0] = e.target.value;
    setData2(newArr);
  };

  const updateTimeNames = (index) => (e) => {
    let newArr = [...timeNames];
    newArr[index] = e.target.value;
    setTimeNames(newArr);
  };

  const oneToFive = [1, 2, 3, 4, 5];
  const oneToSix = [1, 2, 3, 4, 5, 6];
  const EtoJ = ["E", "F", "G", "H", "I", "J"];
  const time = (num) => "Time " + `${num}`;
  const dataName = (num) => "Data Name " + `${num}`;

  return (
    <div className="withTime">
      <h2>Add some more complex data here</h2>
      <div className="table">
        <div className="row row1">
          <input
            placeholder="Data Names \ Time"
            type="text"
            className="cell"
            readOnly
          />
          {oneToSix.map((num) => (
            <input
              value={data2[num - 1][0]}
              placeholder={dataName(num)}
              type="text"
              style={{ color: `var(--${EtoJ[num - 1]})` }}
              className="cell"
              onChange={updateTitle(num - 1)}
            />
          ))}
        </div>
        {oneToFive.map((num) => (
          <div className="row">
            <input
              type="text"
              className="cell"
              placeholder={time(num)}
              value={timeNames[num - 1]}
              style={{ color: "white" }}
              onChange={updateTimeNames(num - 1)}
            />
            {data2.map((x) => (
              <input
                placeholder={x[num]}
                value={x[num]}
                type="text"
                style={{ color: `var(--${EtoJ[data2.indexOf(x)]})` }}
                className="cell"
                onChange={updateData2(data2.indexOf(x), num)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WithTime;
