import React from "react";
import "./reviews_style.scss";
import ReviewCardList from "../../components/review_card/review_card_list";

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
        <ReviewCardList />
      </div>
    </div>
  );
};

export default Reviews;
