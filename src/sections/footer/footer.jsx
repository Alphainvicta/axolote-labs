import React from "react";
import "./footer_style.scss";
import { ReactComponent as Facebook } from "../../icons/FACEBOOK.svg";
import { ReactComponent as Linkedin } from "../../icons/LINKEDIN.svg";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer_contanier">
      <div className="about">
        <p>{t("footer.about")}</p>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/Axolotl.Labs.Ventas" target="blank">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/company/axolotelabs" target="blank">
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
