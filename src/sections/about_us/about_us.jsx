import React from "react";
import image_desktop from "../../images/About_us_desktop.png";

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
        <img src={image_desktop} alt="" />
      </div>
    </div>
  );
};

export default About_us;
