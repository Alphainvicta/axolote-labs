import React from "react";
import Characteristics_card from "./characteristics_card";
import { ReactComponent as Icon1 } from "../../icons/Icon_characteristics_card1.svg";
import { ReactComponent as Icon2 } from "../../icons/Icon_characteristics_card2.svg";

class Characteristics_card_list extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          card_icon: <Icon1 />,
          card_title: "Totalmente Personalizado",
          card_text:
            "No usamos plantillas ya hechas, hacemos tu software desde cero con las especificaciones personalizadas que tu nos pidas en la cotización.No usamos plantillas ya hechas, hacemos tu software desde cero con las especificaciones personalizadas que tu nos pidas en la cotización.",
          id: "card1",
        },
        {
          card_icon: <Icon2 />,
          card_title: "Diseño Responsivo",
          card_text:
            "No hay necesidad de preocuparse por el tamaño de la pantalla. Nuestra interfaz de usuario se adapta a cualquier tamaño de pantalla, desde computadoras de escritorio hasta el celular móvil.",
          id: "card2",
        },
      ],
    };
  }

  render() {
    return this.state.cards.map(({ id, ...cardsprops }) => (
      <Characteristics_card key={id} {...cardsprops} />
    ));
  }
}

export default Characteristics_card_list;
