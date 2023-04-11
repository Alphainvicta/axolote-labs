import React from "react";
import "./contact_style.scss";
import { ReactComponent as Phone } from "../../icons/TELEFONO.svg";
import { ReactComponent as Mail } from "../../icons/CORREO.svg";
import { ReactComponent as User } from "../../icons/User.svg";
import { ReactComponent as Purple_mail } from "../../icons/Correo_morado.svg";

import Button from "../../components/button/button";
import { Button_class } from "../../components/button/button.jsx";

import Input from "../../components/input/input";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="side_a">
        <h2>¡Ponte en contacto!</h2>
        <p>
          Nuestro equipo esta aqui para ayudar. <br />
          Contáctanos para un soporte rápido y amigable.
        </p>
        <div className="phone">
          <Phone />
          <p>+52 3314838300</p>
        </div>
        <div className="mail">
          <Mail />
          <p>AxolotLabsContacto@gmail.com</p>
        </div>
      </div>
      <div className="side_b">
        <Input
          input_type="text"
          input_icon={<User />}
          input_text="Nombre completo"
        />
        <Input
          input_type="email"
          input_icon={<Purple_mail />}
          input_text="Email"
        />
        <textarea placeholder="Mensaje" />
        <Button text="Enviar" button_select={Button_class.pink} />
      </div>
    </div>
  );
};

export default Contact;
