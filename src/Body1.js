import React, { useState } from "react";
import "./Body1.css";
import WithoutTime from "./WithoutTime";
import WithTime from "./WithTime";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Body1({
  data,
  setData,
  pageNum,
  setPageNum,
  data2,
  setData2,
  setTimeNames,
  timeNames,
}) {
  const toTheLeft = () => {
    pageNum !== 0 ? setPageNum(pageNum - 1) : setPageNum(1);
  };

  const toTheRight = () => {
    pageNum !== 1 ? setPageNum(pageNum + 1) : setPageNum(0);
  };

  return (
    <div className="body1">
      <div className="left" onClick={toTheLeft}>
        <ArrowBackIosIcon
          style={{
            fontSize: 40,
            color: "var(--main)",
            top: "41.5%",
            position: "absolute",
          }}
        />
      </div>
      <div className="middle">
        {pageNum === 0 && <WithoutTime data={data} setData={setData} />}
        {pageNum === 1 && (
          <WithTime
            data2={data2}
            setData2={setData2}
            timeNames={timeNames}
            setTimeNames={setTimeNames}
          />
        )}
      </div>
      <div className="right" onClick={toTheRight}>
        <ArrowForwardIosIcon
          style={{
            fontSize: 40,
            color: "var(--main)",
            top: "41.5%",
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
}

export default Body1;
