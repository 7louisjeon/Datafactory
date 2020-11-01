import React from "react";
import "./Header.css";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton } from "@material-ui/core";

function Header({ setPageNum }) {
  const pageNum0 = () => {
    setPageNum(0);
  };
  return (
    <div className="header">
      <div className="headerLeft">
        <IconButton onClick={pageNum0}>
          <SettingsIcon
            className="AAA"
            style={{ fontSize: 100, color: "var(--A)" }}
          />
        </IconButton>
        <h1 style={{ color: "var(--D)" }} onClick={pageNum0}>
          Datafactory
        </h1>
      </div>
      {/* <div className="headerRight">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png" alt=""/>
        </div> */}
    </div>
  );
}

export default Header;
