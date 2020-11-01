import React from "react";
import "./Data.css";
import Slider from "@material-ui/core/Slider";

function Data4({ data, setData }) {
  const handleChange = (e) => {
    setData([
      data[0],
      data[1],
      data[2],
      [data[3][0], parseInt(e.target.value)],
    ]);
  };

  const handleDataNameChange = (e) => {
    setData([data[0], data[1], data[2], [e.target.value, data[3][1]]]);
  };

  const handleSlideChange = (e, newValue) => {
    setData([data[0], data[1], data[2], [data[3][0], newValue]]);
  };

  return (
    <div className="data data4">
      <input
        type="text"
        placeholder="Dataname"
        style={{
          marginRight: "10px",
          color: "var(--D)",
          borderColor: "var(--D)",
        }}
        onChange={handleDataNameChange}
      />
      <h1 style={{ color: "var(--D)" }}>:</h1>
      <input
        value={data[3][1]}
        type="text"
        placeholder="Value"
        style={{
          width: "200px",
          marginLeft: "10px",
          color: "var(--D)",
          borderColor: "var(--D)",
        }}
        onChange={handleChange}
      />
      <Slider
        value={data[3][1]}
        aria-labelledby="continuous-slider"
        style={{
          width: "600px",
          color: "var(--D)",
          marginTop: "10px",
          marginLeft: "30px",
        }}
        onChange={handleSlideChange}
      />
    </div>
  );
}

export default Data4;
