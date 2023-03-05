import React from "react";
import Review_card_list from "../../components/review_card/review_card_list";

const Reviews = () => {
  return (
    <div className="reviews_container">
      <div className="side_a">
        <h2>Reseñas Reales de Nuestros Clientes</h2>
        <p>
          Observa el impacto que nuestras soluciones generan en nuestros
          clientes
        </p>
      </div>
      <div className="side_b">
        <Review_card_list />
      </div>
    </div>
  );
};

export default Reviews;
