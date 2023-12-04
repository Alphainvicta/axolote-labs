import React, { useEffect } from "react";
import "./service_card_style.scss";
import Button from "../button/button";
import { Icon_class } from "../button/button";

import { useTranslation } from "react-i18next";

const ServiceCard = ({ card_image, card_title, card_text, card_button }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;
  return (
    <div className="service_card_container">
      <div className="card_side_a">
        <img src={card_image} alt="" />
      </div>
      <div className="card_side_b">
        <h3>{card_title}</h3>
        <p>{card_text}</p>
        <a href="#contact">
          <Button
            text={t("services.sideb.button")}
            button_select={card_button}
            icon_select={Icon_class.flecha}
          />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
