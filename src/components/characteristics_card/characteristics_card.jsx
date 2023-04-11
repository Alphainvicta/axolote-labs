import React from "react";
import "./characteristics_card_style.scss";

const Characteristics_card = ({ card_icon, card_title, card_text }) => {
  return (
    <div className="characteristics_card_container">
      {card_icon}
      <h3>{card_title}</h3>
      <p>{card_text}</p>
    </div>
  );
};

export default Characteristics_card;
