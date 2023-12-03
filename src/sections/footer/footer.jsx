import React from "react";
import "./footer_style.scss";
import { ReactComponent as Facebook } from "../../icons/FACEBOOK.svg";
import { ReactComponent as Linkedin } from "../../icons/LINKEDIN.svg";

const Footer = () => {
  return (
    <div className="footer_contanier">
      <div className="about">
        <p>© 2023 Axolotl Labs - Landing Page</p>
      </div>
      <div className="social">
        <a href="">
          <Facebook />
        </a>
        <a href="">
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
