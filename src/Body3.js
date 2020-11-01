import React, { useState } from "react";
import "./Body3.css";
import Slider from "@material-ui/core/Slider";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

function Body3({ data, setData, timeNames }) {
  const EtoJ = ["E", "F", "G", "H", "I", "J"];
  const zeroToFive = [0, 1, 2, 3, 4, 5];
  const zeroToFour = [0, 1, 2, 3, 4];
  const zeroToThree = [0, 1, 2, 3];
  const maxVal = () => {
    let most = 0;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        if (data[i][j + 1] > most) {
          most = data[i][j + 1];
        }
      }
    }
    return most;
  };
  const max = maxVal();

  const [slider1Val, setSlider1Val] = useState(50);
  const [slider2Val, setSlider2Val] = useState(50);
  const [slider3Val, setSlider3Val] = useState(50);
  const [slider4Val, setSlider4Val] = useState(50);
  const [slider5Val, setSlider5Val] = useState(50);
  const [slider6Val, setSlider6Val] = useState(50);

  const handleSlider1Change = (e, newValue) => {
    setSlider1Val(newValue);
  };
  const handleSlider2Change = (e, newValue) => {
    setSlider2Val(newValue);
  };
  const handleSlider3Change = (e, newValue) => {
    setSlider3Val(newValue);
  };
  const handleSlider4Change = (e, newValue) => {
    setSlider4Val(newValue);
  };
  const handleSlider5Change = (e, newValue) => {
    setSlider5Val(newValue);
  };
  const handleSlider6Change = (e, newValue) => {
    setSlider6Val(newValue);
  };

  const resetSliderVals = () => {
    setSlider1Val(50);
    setSlider2Val(50);
    setSlider3Val(50);
    setSlider4Val(50);
    setSlider5Val(50);
    setSlider6Val(50);
  };

  const sliderVal = (x) => {
    if (x == 1) {
      return slider1Val;
    } else if (x == 2) {
      return slider2Val;
    } else if (x == 3) {
      return slider3Val;
    } else if (x == 4) {
      return slider4Val;
    } else if (x == 5) {
      return slider5Val;
    } else {
      return slider6Val;
    }
  };

  return (
    <div className="body3">
      <div className="body3Middle">
        <div className="lineGraph bigLineGraph">
          <div className="dataNames2">
            {zeroToFive.map((val) => (
              <h3
                className="data2Name"
                style={{
                  color: `var(--${EtoJ[val]})`,
                  marginTop: `${
                    389 -
                    (((data[val][1] +
                      data[val][2] +
                      data[val][3] +
                      data[val][4] +
                      data[val][5]) /
                      5 +
                      ((data[val][1] -
                        (data[val][1] +
                          data[val][2] +
                          data[val][3] +
                          data[val][4] +
                          data[val][5]) /
                          5) *
                        sliderVal(val + 1)) /
                        50) /
                      max) *
                      350
                  }px`,
                }}
              >
                {data[val][0]}
              </h3>
            ))}
          </div>
          {zeroToFive.map((val) => (
            <div className="data2LineGraph">
              {zeroToFour.map((num) => (
                <div
                  className="point"
                  style={{
                    marginLeft: `${100 + 200 * num}px`,
                    marginTop: `${
                      400 -
                      (((data[val][1] +
                        data[val][2] +
                        data[val][3] +
                        data[val][4] +
                        data[val][5]) /
                        5 +
                        ((data[val][num + 1] -
                          (data[val][1] +
                            data[val][2] +
                            data[val][3] +
                            data[val][4] +
                            data[val][5]) /
                            5) *
                          sliderVal(val + 1)) /
                          50) /
                        max) *
                        350
                    }px`,
                    backgroundColor: `var(--${EtoJ[val]})`,
                  }}
                ></div>
              ))}
              {zeroToThree.map((num) => (
                <svg width="1000" height="400">
                  <line
                    x1={`${100 + 200 * num}`}
                    y1={`${
                      400 -
                      (((data[val][1] +
                        data[val][2] +
                        data[val][3] +
                        data[val][4] +
                        data[val][5]) /
                        5 +
                        ((data[val][num + 1] -
                          (data[val][1] +
                            data[val][2] +
                            data[val][3] +
                            data[val][4] +
                            data[val][5]) /
                            5) *
                          sliderVal(val + 1)) /
                          50) /
                        max) *
                        350
                    }`}
                    x2={`${100 + 200 * (num + 1)}`}
                    y2={`${
                      400 -
                      (((data[val][1] +
                        data[val][2] +
                        data[val][3] +
                        data[val][4] +
                        data[val][5]) /
                        5 +
                        ((data[val][num + 2] -
                          (data[val][1] +
                            data[val][2] +
                            data[val][3] +
                            data[val][4] +
                            data[val][5]) /
                            5) *
                          sliderVal(val + 1)) /
                          50) /
                        max) *
                        350
                    }`}
                    stroke={`var(--${EtoJ[val]})`}
                  />
                </svg>
              ))}
              <div className="timeNames">
                {zeroToFive.map((x) => (
                  <h3
                    className="timeName"
                    style={{
                      color: "wheat",
                      marginLeft: `${100 + 200 * x}px`,
                    }}
                  >
                    {timeNames[x]}
                  </h3>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="resetButton" onClick={resetSliderVals}>
        <RotateLeftIcon style={{ fontSize: "100px" }} />
      </div>
      <div className="body3Right">
        <div className="lineGraph">
          <div class="slider">
            <Slider
              orientation="vertical"
              value={slider1Val}
              type="A"
              aria-labelledby="vertical-slider"
              style={{ color: `var(--E)` }}
              onChange={handleSlider1Change}
            />
            <Slider
              orientation="vertical"
              value={slider2Val}
              type="A"
              aria-labelledby="vertical-slider"
              style={{ color: `var(--F)` }}
              onChange={handleSlider2Change}
            />
            <Slider
              orientation="vertical"
              value={slider3Val}
              type="A"
              aria-labelledby="vertical-slider"
              style={{ color: `var(--G)` }}
              onChange={handleSlider3Change}
            />
            <Slider
              orientation="vertical"
              value={slider4Val}
              type="A"
              aria-labelledby="vertical-slider"
              style={{ color: `var(--H)` }}
              onChange={handleSlider4Change}
            />
            <Slider
              orientation="vertical"
              value={slider5Val}
              type="A"
              aria-labelledby="vertical-slider"
              style={{ color: `var(--I)` }}
              onChange={handleSlider5Change}
            />
            <Slider
              orientation="vertical"
              value={slider6Val}
              type="A"
              aria-labelledby="vertical-slider"
              style={{ color: `var(--J)` }}
              onChange={handleSlider6Change}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body3;
