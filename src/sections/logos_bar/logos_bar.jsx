import React from "react";
import { ReactComponent as Lreact } from "../../icons/REACT.svg";
import { ReactComponent as Js } from "../../icons/JS.svg";
import { ReactComponent as Node } from "../../icons/NODE.svg";
import { ReactComponent as Firebase } from "../../icons/FIREBASE.svg";
import { ReactComponent as Excel } from "../../icons/EXCEL.svg";

const Logos_bar = () => {
  return (
    <div className="logos_bar_container">
      <Lreact />
      <Js />
      <Node />
      <Firebase />
      <Excel />
    </div>
  );
};

export default Logos_bar;
