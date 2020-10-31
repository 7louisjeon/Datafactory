import React from "react";
import "./Data.css";
import Slider from "@material-ui/core/Slider";

function Data1({ data, setData }) {
  const handleChange = (e) => {
    setData([
      [data[0][0], parseInt(e.target.value)],
      data[1],
      data[2],
      data[3],
    ]);
  };

  const handleDataNameChange = (e) => {
    setData([[e.target.value, data[0][1]], data[1], data[2], data[3]]);
  };

  const handleSlideChange = (e, newValue) => {
    setData([[data[0][0], newValue], data[1], data[2], data[3]]);
  };

  return (
    <div className="data data1">
      <input
        type="text"
        placeholder="Dataname"
        style={{
          marginRight: "10px",
          borderColor: "var(--A)",
          color: "var(--A)",
        }}
        onChange={handleDataNameChange}
      />
      <h1 style={{ color: "var(--A)" }}>:</h1>
      <input
        type="number"
        placeholder="Value"
        style={{
          width: "200px",
          marginLeft: "10px",
          borderColor: "var(--A)",
          color: "var(--A)",
        }}
        onChange={handleChange}
        value={data[0][1]}
        min="0"
        max="100"
      />
      <Slider
        value={data[0][1]}
        aria-labelledby="continuous-slider"
        style={{
          width: "600px",
          color: "var(--A)",
          marginTop: "10px",
          marginLeft: "30px",
        }}
        onChange={handleSlideChange}
      />
    </div>
  );
}

export default Data1;
