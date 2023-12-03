import React from "react";
import "./services_style.scss";
import ServiceCardList from "../../components/service_card/service_card_list";

const Services = () => {
  return (
    <div id="services" className="services_cont">
      <div className="side_a">
        <h2>NUESTROS SERVICIOS</h2>
        <p>Ofrecemos el siguiente catalogo de soluciones</p>
      </div>
      <div className="side_b">
        <ServiceCardList />
      </div>
    </div>
  );
};

export default Services;
