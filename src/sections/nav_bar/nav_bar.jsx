import React from "react";
import { ReactComponent as Logo } from '../../icons/LOGO.svg';

import Button from "../../components/button/button";
import { Button_class } from '../../components/button/button.jsx';
import { Icon_class } from '../../components/button/button.jsx';

const Nav_bar = () => {

    return(
        <div className='nav_bar_container'>
            <div className="logo">
                <Logo/>
            </div>
            <div className="buttons">
                <Button text='Contacto' button_select={Button_class.clear}/>
                <Button text='SERVICIOS' button_select={Button_class.purple}/>
                <Button text='COTIZA AQUÍ' button_select={Button_class.pink} icon_select={Icon_class.cohete}/>
            </div>
        </div>
    )
}

export default Nav_bar;