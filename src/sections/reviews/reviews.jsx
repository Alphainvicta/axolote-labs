import React, { useEffect } from "react";
import "./reviews_style.scss";
import ReviewCardList from "../../components/review_card/review_card_list";

import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;
  return (
    <div className="reviews_container">
      <div className="side_a">
        <h2>{t("reviews.sidea.title")}</h2>
        <p>{t("reviews.sidea.text")}</p>
      </div>
      <div className="side_b">
        <ReviewCardList />
      </div>
    </div>
  );
};

export default Reviews;
