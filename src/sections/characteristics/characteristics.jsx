import React from "react";
import Characteristics_card_list from "../../components/characteristics_card/characteristics_card_list";

const Characteristics = () => {

    return (
        <div className="characteristics_contaner">
            <div className="side_a">
                <h2>
                    CARACTERISTICAS DE NUESTRO SOFTWARE
                </h2>
                <p>
                    Todo software que nosotros desarrollamos incluye las siguientes caracteristicas
                </p>
            </div>
            <div className="side_b">
                <Characteristics_card_list/>
            </div>
        </div>
    )
}

export default Characteristics;