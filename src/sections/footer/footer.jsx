import React, { useEffect } from "react";
import "./footer_style.scss";
import { ReactComponent as Facebook } from "../../icons/FACEBOOK.svg";
import { ReactComponent as Linkedin } from "../../icons/LINKEDIN.svg";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;

  return (
    <div className="footer_contanier">
      <div className="about">
        <p>{t("footer.about")}</p>
      </div>
      <div className="social">
        <a href="facebook.com">
          <Facebook />
        </a>
        <a href="linkedin.com">
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
