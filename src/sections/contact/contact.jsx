import React, { useState } from "react";
import "./contact_style.scss";
import { ReactComponent as Phone } from "../../icons/TELEFONO.svg";
import { ReactComponent as Mail } from "../../icons/CORREO.svg";
import { ReactComponent as User } from "../../icons/User.svg";
import { ReactComponent as Purple_mail } from "../../icons/Correo_morado.svg";
import Button from "../../components/button/button";
import { Button_class } from "../../components/button/button.jsx";
import Input from "../../components/input/input";

const Contact = () => {
  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [messageData, setMessageData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      nameData,
      emailData,
      messageData,
    };
    // Convert form data to JSON
    const jsonData = JSON.stringify(formData, null, 2);
    // Save jsonData to a file or use it as needed
    console.log(jsonData);
    fetch("http://192.168.1.99:80/api/", { method: "POST", body: jsonData });
  };

  return (
    <div id="contact" className="contact_container">
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
      <form className="side_b" onSubmit={handleSubmit}>
        <Input
          input_type="text"
          input_icon={<User />}
          input_text="Nombre completo"
          onChange={(e) => setNameData(e.target.value)}
        />
        <Input
          input_type="email"
          input_icon={<Purple_mail />}
          input_text="Email"
          onChange={(e) => setEmailData(e.target.value)}
        />
        <textarea
          name="Message"
          onChange={(e) => setMessageData(e.target.value)}
          placeholder="Mensaje"
        />
        <Button text="Enviar" button_select={Button_class.pink} />
      </form>
    </div>
  );
};

export default Contact;
