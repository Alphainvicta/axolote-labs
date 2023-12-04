import React, { useEffect } from "react";
import "./characteristics_style.scss";
import CharacteristicsCardList from "../../components/characteristics_card/characteristics_card_list";

import { useTranslation } from "react-i18next";

const Characteristics = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;

  return (
    <div className="characteristics_contaner">
      <div className="side_a">
        <h2>{t("characteristics.sidea.title")}</h2>
        <p>{t("characteristics.sidea.text")}</p>
      </div>
      <div className="side_b">
        <CharacteristicsCardList />
      </div>
    </div>
  );
};

export default Characteristics;
