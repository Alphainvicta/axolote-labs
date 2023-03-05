import React from "react";
import Button from "../button/button";
import { Icon_class } from "../button/button";

const Service_card = ({ card_image, card_title, card_text, card_button }) => {
  return (
    <div className="service_card_container">
      <div className="side_a">
        <img src={card_image} alt="" />
      </div>
      <div className="side_b">
        <h3>{card_title}</h3>
        <p>{card_text}</p>
        <Button
          text="COTIZA TU SOLUCIÓN"
          button_select={card_button}
          icon_select={Icon_class.flecha}
        />
      </div>
    </div>
  );
};

export default Service_card;
