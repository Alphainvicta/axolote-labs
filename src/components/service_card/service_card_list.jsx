import React from "react";
import ServiceCard from "./service_card";
import { Button_class } from "../../components/button/button.jsx";
import image1 from "../../images/Service_card_react.png";
import image2 from "../../images/Service_card_interactive.png";
import image3 from "../../images/Service_card_postgreesql.png";
import image4 from "../../images/Service_card_excel.png";

import { useTranslation } from "react-i18next";

const ServiceCardList = () => {
  const { t } = useTranslation();

  const cards = [
    {
      card_image: image1,
      image_alt: "AxoloteLabs Web and mobile services",
      card_title: t("services.sideb.card1.title"),
      card_text: t("services.sideb.card1.text"),
      card_button: Button_class.pink,
      id: "card1",
    },
    {
      card_image: image2,
      image_alt: "AxoloteLabs Interactive software",
      card_title: t("services.sideb.card2.title"),
      card_text: t("services.sideb.card2.text"),
      card_button: Button_class.purple,
      id: "card2",
    },
    {
      card_image: image3,
      image_alt: "AxoloteLabs Databases",
      card_title: t("services.sideb.card3.title"),
      card_text: t("services.sideb.card3.text"),
      card_button: Button_class.pink,
      id: "card3",
    },
    {
      card_image: image4,
      image_alt: "AxoloteLabs Excel macros",
      card_title: t("services.sideb.card4.title"),
      card_text: t("services.sideb.card4.text"),
      card_button: Button_class.purple,
      id: "card4",
    },
  ];

  return cards.map(({ id, ...cardsprops }) => (
    <ServiceCard key={id} {...cardsprops} />
  ));
};

export default ServiceCardList;
