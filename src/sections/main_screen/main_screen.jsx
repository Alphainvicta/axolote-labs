import React from "react";
import desktop_image from '../../images/Main_screen_desktop.png';
import phone_image from '../../images/Main_screen_phone.png';

import Button from "../../components/button/button";
import { Button_class } from '../../components/button/button.jsx';
import { Icon_class } from '../../components/button/button.jsx';

const Main_screen = () => {

    return (
        <div className="main_screen_container">
            <div className="side_a">
                <h1 className="title_text">
                    SOLUCIONES CON  SOFTWARE A TU MEDIDA
                </h1>
                <p className="description_text">
                    Somos una empresa de Desarrollo de Software orientada para crear soluciones de software para empresas medianas y chicas
                </p>
                <div className="buttons">
                    <Button text="COTIZA TU SOLUCIÓN" button_select={Button_class.pink} icon_select={Icon_class.cohete}/>
                    <Button text="NUESTROS SERVICIOS" button_select={Button_class.purple_inverted}/>
                </div>
            </div>
            <div className="side_b">
                <img src={desktop_image} alt=''/>
                <img src={phone_image} alt=''/>
            </div>
        </div>
    )
}

export default Main_screen