import React from "react";
import "./about_us_style.scss";
import image_desktop from "../../images/About_us_desktop.png";
import image_phone from "../../images/About_us_phone.png";

const About_us = () => {
  return (
    <div className="about_us_container">
      <div className="side_a">
        <h2>AXOLOTL LABS</h2>
        <h3>Misión</h3>
        <p>
          Crear el mejor producto de software con la mejor solución posible para
          facilitar la vida de nuestros clientes
        </p>
        <h3>Visión</h3>
        <p>
          Ser una empresa atractiva como proveedor de tecnologia y soluciones
          empresariales de la mas alta calidad en el mercado
        </p>
      </div>
      <div className="side_b">
        <div className="image_desktop">
          <img src={image_desktop} alt="" />
        </div>
        <div className="image_phone">
          <img src={image_phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About_us;
