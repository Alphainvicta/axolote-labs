import React, { useEffect } from "react";
import "./services_style.scss";
import ServiceCardList from "../../components/service_card/service_card_list";

import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;
  return (
    <div id="services" className="services_cont">
      <div className="side_a">
        <h2>{t("services.sidea.title")}</h2>
        <p>{t("services.sidea.text")}</p>
      </div>
      <div className="side_b">
        <ServiceCardList />
      </div>
    </div>
  );
};

export default Services;
