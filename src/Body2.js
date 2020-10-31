import React from "react";
import "./Body2.css";
import Row from "./Row";

function Body2({ data, setData }) {
  const relativeValue = (x) =>
    (data[x][1] / (data[0][1] + data[1][1] + data[2][1] + data[3][1])) * 400;
  const relativeValueFactorial = (x) => {
    let y = 0;
    for (let i = 0; i < x + 1; i++) {
      y = y + relativeValue(i);
    }
    return Math.floor(y);
  };
  const maxVal = Math.max(data[0][1], data[1][1], data[2][1], data[3][1]);
  const barHeight = (x) => (data[x][1] / maxVal) * 320;
  const arr = new Array(400);
  arr.fill("A", 0, relativeValue(0));
  arr.fill("B", relativeValue(0), relativeValueFactorial(1));
  arr.fill("C", relativeValueFactorial(1), relativeValueFactorial(2));
  arr.fill("D", relativeValueFactorial(2), relativeValueFactorial(3));

  return (
    <div className="body2">
      <div className="body2Left">
        <div className="lineGraph rows">
          {arr.map((x) => (
            <Row cls={x} />
          ))}
        </div>
      </div>
      <div className="body2Middle">
        <div className="lineGraph lineGraphMiddle">
          <div
            className="bar bar1"
            style={{
              height: `${barHeight(0)}px`,
              marginTop: `${400 - barHeight(0)}px`,
              backgroundColor: "var(--A)",
            }}
          ></div>
          <div
            className="bar"
            style={{
              height: `${barHeight(1)}px`,
              marginTop: `${400 - barHeight(1)}px`,
              backgroundColor: "var(--B)",
            }}
          ></div>
          <div
            className="bar"
            style={{
              height: `${barHeight(2)}px`,
              marginTop: `${400 - barHeight(2)}px`,
              backgroundColor: "var(--C)",
            }}
          ></div>
          <div
            className="bar"
            style={{
              height: `${barHeight(3)}px`,
              marginTop: `${400 - barHeight(3)}px`,
              backgroundColor: "var(--D)",
            }}
          ></div>
        </div>
        <div className="dataNames">
          <h3 className="dataName1" style={{ color: "var(--A)" }}>
            {data[0][0]}
          </h3>
          <h3 className="dataName2" style={{ color: "var(--B)" }}>
            {data[1][0]}
          </h3>
          <h3 className="dataName3" style={{ color: "var(--C)" }}>
            {data[2][0]}
          </h3>
          <h3 className="dataName4" style={{ color: "var(--D)" }}>
            {data[3][0]}
          </h3>
        </div>
      </div>
      <div className="body2Right">
        <div className="lineGraph">
          <div
            className="box box1"
            style={{
              position: "absolute",
              border: "1px solid var(--A)",
              color: "var(--A)",
              zIndex: "1",
              width: `${Math.sqrt(relativeValue(0)) * 20}px`,
              height: `${Math.sqrt(relativeValue(0)) * 20}px`,
            }}
          >
            V={data[0][1]}
          </div>
          <div
            className="box box2"
            style={{
              color: "var(--B)",
              position: "absolute",
              border: "1px solid var(--B)",
              zIndex: "1",
              width: `${Math.sqrt(relativeValue(1)) * 20}px`,
              height: `${Math.sqrt(relativeValue(1)) * 20}px`,
            }}
          >
            V={data[1][1]}
          </div>
          <div
            className="box box3"
            style={{
              color: "var(--C)",
              position: "absolute",
              border: "1px solid var(--C)",
              zIndex: "1",
              width: `${Math.sqrt(relativeValue(2)) * 20}px`,
              height: `${Math.sqrt(relativeValue(2)) * 20}px`,
            }}
          >
            V={data[2][1]}
          </div>
          <div
            className="box box4"
            style={{
              color: "var(--D)",
              position: "absolute",
              border: "1px solid var(--D)",
              zIndex: "1",
              width: `${Math.sqrt(relativeValue(3)) * 20}px`,
              height: `${Math.sqrt(relativeValue(3)) * 20}px`,
            }}
          >
            V={data[3][1]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body2;
