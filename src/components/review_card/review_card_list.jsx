import React from "react";
import ReviewCard from "./review_card";
import { ReactComponent as ReviewImage1 } from "../../icons/Review.svg";
import { ReactComponent as ReviewImage2 } from "../../icons/UserCirclePurple.svg";
import { ReactComponent as ReviewImage3 } from "../../icons/UserCirclePink.svg";
import { ReactComponent as Star5 } from "../../icons/5ESTRELLAS.svg";
import { ReactComponent as Star4 } from "../../icons/4ESTRELLAS.svg";

import { useTranslation } from "react-i18next";

const ReviewCardList = () => {
  const { t } = useTranslation();

  const cards = [
    {
      review_icon: <ReviewImage1 />,
      review_name: t("reviews.sideb.card1.name"),
      review_description: t("reviews.sideb.card1.description"),
      review_text: t("reviews.sideb.card1.text"),
      review_stars: <Star5 />,
      id: "card1",
    },
    {
      review_icon: <ReviewImage2 />,
      review_name: t("reviews.sideb.card2.name"),
      review_description: t("reviews.sideb.card2.description"),
      review_text: t("reviews.sideb.card2.text"),
      review_stars: <Star4 />,
      id: "card2",
    },
    {
      review_icon: <ReviewImage3 />,
      review_name: t("reviews.sideb.card3.name"),
      review_description: t("reviews.sideb.card3.description"),
      review_text: t("reviews.sideb.card3.text"),
      review_stars: <Star5 />,
      id: "card3",
    },
  ];

  return cards.map(({ id, ...cardsprops }) => (
    <ReviewCard key={id} {...cardsprops} />
  ));
};

export default ReviewCardList;
