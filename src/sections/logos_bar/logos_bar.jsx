import React from "react";
import "./logos_bar_style.scss";
import { ReactComponent as Lreact } from "../../icons/REACT.svg";
import { ReactComponent as Js } from "../../icons/JS.svg";
import { ReactComponent as Postgre } from "../../icons/POSTGRE.svg";
import { ReactComponent as Php } from "../../icons/php-logo.svg";
import { ReactComponent as Python } from "../../icons/python.svg";
import { ReactComponent as Excel } from "../../icons/EXCEL.svg";
import { ReactComponent as Unity } from "../../icons/unity.svg";
import { ReactComponent as Unreal } from "../../icons/unreal.svg";

const LogosBar = () => {
  return (
    <div className="logos_bar_container">
      <div className="logos">
        <Lreact />
        <Js />
        <Php />
        <Postgre />
        <Python />
        <Excel />
        <Unity />
        <Unreal />
      </div>
    </div>
  );
};

export default LogosBar;
