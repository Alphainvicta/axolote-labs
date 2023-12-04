import React, { useEffect } from "react";
import "./main_screen_style.scss";
import desktop_image from "../../images/Main_screen_desktop.png";
import tablet_image from "../../images/Main_screen_phone.png";

import Button from "../../components/button/button.jsx";
import { Button_class } from "../../components/button/button.jsx";
import { Icon_class } from "../../components/button/button.jsx";

import { useTranslation } from "react-i18next";

const MainScreen = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;
  return (
    <div className="main_screen_container">
      <div className="side_a">
        <h1 className="title_text">{t("mainScreen.sidea.title")}</h1>
        <p className="description_text">{t("mainScreen.sidea.description")}</p>
        <div className="buttons">
          <div className="button_1">
            <a href="#contact">
              <Button
                text={t("mainScreen.sidea.button1")}
                button_select={Button_class.pink}
                icon_select={Icon_class.cohete}
              />
            </a>
          </div>
          <div className="button_2">
            <a href="#services">
              <Button
                text={t("mainScreen.sidea.button2")}
                button_select={Button_class.purple_inverted}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="side_b">
        <div className="desktop_image">
          <img src={desktop_image} alt="" />
        </div>
        <div className="tablet_image">
          <img src={tablet_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
