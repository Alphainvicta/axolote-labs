import React from "react";
import "./nav_bar_style.scss";
import { ReactComponent as Logo } from "../../icons/LOGO.svg";

import Button from "../../components/button/button.jsx";
import { Button_class, Icon_class } from "../../components/button/button.jsx";

import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <div className="nav_bar_container">
      <div className="side_a">
        <Logo />
      </div>
      <div className="side_b">
        <div className="button1">
          <a href="#contact">
            <Button
              text={t("nav.button1")}
              button_select={Button_class.clear}
            />
          </a>
        </div>
        <div className="button2">
          <a href="#services">
            <Button
              text={t("nav.button2")}
              button_select={Button_class.purple}
            />
          </a>
        </div>
        <div className="button3">
          <a href="#contact">
            <Button
              text={t("nav.button3")}
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
