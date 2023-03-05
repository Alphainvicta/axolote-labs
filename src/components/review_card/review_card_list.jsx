import React from "react";
import Review_card from "./review_card";
import { ReactComponent as Review_image1 } from "../../icons/Review.svg";
import { ReactComponent as Star5 } from "../../icons/5ESTRELLAS.svg";
import { ReactComponent as Star4 } from "../../icons/4ESTRELLAS.svg";

class Review_card_list extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          review_icon: <Review_image1 />,
          review_name: "Global FHAS Seguridad Privada",
          review_description: "Director General",
          review_text:
            "Excelente producto final, nos gustó mucho la base de datos que nos hicieron de nuestro personal activo y dado de baja y la página web de la empresa, gracias.",
          review_stars: <Star5 />,
          id: "card1",
        },
        {
          review_icon: <Review_image1 />,
          review_name: "Diego Arturo López de la Peña",
          review_description: "Contador",
          review_text:
            "Estoy muy feliz con las plantillas de Excel que realizaron, ahora puedo calcular la nómina de mi personal en menos de 5 minutos y la utilidad de mi empresa de forma sencilla, recomendados.",
          review_stars: <Star4 />,
          id: "card2",
        },
        {
          review_icon: <Review_image1 />,
          review_name: "Silvia Leticia Gonzalez Venegas",
          review_description: "Jefa de Laboratorio de Microbiología",
          review_text:
            "Me encantó la aplicación, ahora gracias a esta app puedo registrar las horas de entradas y salidas de mis empleados, gracias, muy profesionales.",
          review_stars: <Star5 />,
          id: "card3",
        },
      ],
    };
  }

  render() {
    return this.state.cards.map(({ id, ...cardsprops }) => (
      <Review_card key={id} {...cardsprops} />
    ));
  }
}

export default Review_card_list;
