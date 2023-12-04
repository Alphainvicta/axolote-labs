import React from "react";
import "./services_style.scss";
import ServiceCardList from "../../components/service_card/service_card_list";

import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
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
