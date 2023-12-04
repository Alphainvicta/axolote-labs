import React, { useEffect } from "react";
import CharacteristicsCard from "./characteristics_card";
import { ReactComponent as Icon1 } from "../../icons/Icon_characteristics_card1.svg";
import { ReactComponent as Icon2 } from "../../icons/Icon_characteristics_card2.svg";

import { useTranslation } from "react-i18next";

const CharacteristicsCardList = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;

  const cards = [
    {
      card_icon: <Icon1 />,
      card_title: t("characteristics.sideb.card1.title"),
      card_text: t("characteristics.sideb.card1.text"),
      id: "card1",
    },
    {
      card_icon: <Icon2 />,
      card_title: t("characteristics.sideb.card2.title"),
      card_text: t("characteristics.sideb.card2.text"),
      id: "card2",
    },
  ];

  return cards.map(({ id, ...cardsprops }) => (
    <CharacteristicsCard key={id} {...cardsprops} />
  ));
};

export default CharacteristicsCardList;
