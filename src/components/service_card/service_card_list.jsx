import React from "react";
import ServiceCard from "./serviceCard";
import { Button_class } from "../../components/button/button.jsx";
import image1 from "../../images/Service_card_excel.png";
import image2 from "../../images/Service_card_react.png";
import image3 from "../../images/Service_card_postgreesql.png";

class ServiceCardList extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          card_image: image1,
          card_title: "Soluciones en EXCEL con uso de Macros",
          card_text:
            "Cualquier tipo de plantilla de Excel, con uso de macros, formulas y formato personalizado. Ya sea para fines contables, financieros, de recursos humanos, de inventario, de nóminas, de cálculos automatizados, de lo que a tí se te ocurra!",
          card_button: Button_class.pink,
          id: "card1",
        },
        {
          card_image: image2,
          card_title: "Páginas Web y Aplicaciones Móviles",
          card_text:
            "Cualquier tipo de Página Web y/o Aplicación Móvil, con diseño responsivo, personalizado y orientado a tus necesidades. Creando tu solución desde cero, sin hacer uso de plantillas genéricas ya predefinidas.",
          card_button: Button_class.purple,
          id: "card2",
        },
        {
          card_image: image3,
          card_title: "Bases de Datos con Interfaz de Usuario",
          card_text:
            "Cualquier tipo de Base de Datos incluyendote la interfaz de usuario para manipular y hacer uso de tu Base. Bases de Datos para inventario de articulos, personal, sucursales, ticket de venta de articulos, etc. ",
          card_button: Button_class.pink,
          id: "card3",
        },
      ],
    };
  }

  render() {
    return this.state.cards.map(({ id, ...cardsprops }) => (
      <ServiceCard key={id} {...cardsprops} />
    ));
  }
}

export default ServiceCardList;
