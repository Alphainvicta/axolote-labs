import React from "react";
import "./nav_bar_style.scss";
import { ReactComponent as Logo } from "../../icons/LOGO.svg";

import Button from "../../components/button/button";
import { Button_class } from "../../components/button/button.jsx";
import { Icon_class } from "../../components/button/button.jsx";

const Nav_bar = () => {
  return (
    <div className="nav_bar_container">
      <div className="side_a">
        <Logo />
      </div>
      <div className="side_b">
        <div className="button1">
          <Button text="Contacto" button_select={Button_class.clear} />
        </div>
        <div className="button2">
          <Button text="SERVICIOS" button_select={Button_class.purple} />
        </div>
        <div className="button3">
          <Button
            text="COTIZA AQUÍ"
            button_select={Button_class.pink}
            icon_select={Icon_class.cohete}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav_bar;
