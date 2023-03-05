import React from "react";
import Service_card_list from "../../components/service_card/service_card_list";

const Services = () => {

    return (
        <div className="services_cont">
            <div className="side_a">
                <h2>
                    NUESTROS SERVICIOS
                </h2>
                <p>
                    Ofrecemos el siguiente catalogo de soluciones
                </p>
            </div>
            <div className="side_b">
                <Service_card_list/>
            </div>
        </div>
    )
}

export default Services;