import React from "react";
import "./nav_bar_style.scss";
import { ReactComponent as Logo } from "../../icons/LOGO.svg";

import Button from "../../components/button/button.jsx";
import { Button_class, Icon_class } from "../../components/button/button.jsx";

const NavBar = () => {
  return (
    <div className="nav_bar_container">
      <div className="side_a">
        <Logo />
      </div>
      <div className="side_b">
        <div className="button1">
          <a href="#contact">
            <Button text="Contacto" button_select={Button_class.clear} />
          </a>
        </div>
        <div className="button2">
          <a href="#services">
            <Button text="SERVICIOS" button_select={Button_class.purple} />
          </a>
        </div>
        <div className="button3">
          <a href="#contact">
            <Button
              text="COTIZA AQUÍ"
              button_select={Button_class.pink}
              icon_select={Icon_class.cohete}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
