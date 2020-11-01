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
      <div className="headerRight">
        <h2>Developer: Eunbae Jeon</h2>
        <br />
        <h2>Email: wjss5115@gmail.com</h2>
        <br />
        <h2>Github: https://github.com/7louisjeon</h2>
      </div>
    </div>
  );
}

export default Header;
