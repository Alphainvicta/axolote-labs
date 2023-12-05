import React from "react";
import "./about_us_style.scss";
import image_desktop from "../../images/About_us_desktop.png";
import image_tablet from "../../images/About_us_tablet.png";
import image_phone from "../../images/About_us_phone.png";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="about_us_container">
      <div className="side_a">
        <h2>{t("about.sidea.title")}</h2>
        <h3>{t("about.sidea.subtitle1")}</h3>
        <p>{t("about.sidea.text1")}</p>
        <h3>{t("about.sidea.subtitle2")}</h3>
        <p>{t("about.sidea.text2")}</p>
      </div>
      <div className="side_b">
        <div className="image_desktop">
          <img src={image_desktop} alt="" />
        </div>
        <div className="image_tablet">
          <img src={image_tablet} alt="" />
        </div>
        <div className="image_phone">
          <img src={image_phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
