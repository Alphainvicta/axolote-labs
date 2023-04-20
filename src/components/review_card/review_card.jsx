import React from "react";
import "./review_card_style.scss";

const Review_card = ({
  review_icon,
  review_name,
  review_description,
  review_text,
  review_stars,
}) => {
  return (
    <div className="review_card_container">
      <div className="review_card_side_a">
        {review_icon}
        <h3>{review_name}</h3>
        <p className="review_card_description">{review_description}</p>
      </div>
      <div className="review_card_side_b">
        <p className="review_card_text">{review_text}</p>
        {review_stars}
      </div>
    </div>
  );
};

export default Review_card;
