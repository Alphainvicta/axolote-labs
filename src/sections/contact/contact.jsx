import React, { useState } from "react";
import "./contact_style.scss";
import { ReactComponent as Phone } from "../../icons/TELEFONO.svg";
import { ReactComponent as Mail } from "../../icons/CORREO.svg";
import { ReactComponent as User } from "../../icons/User.svg";
import { ReactComponent as PurpleMail } from "../../icons/Correo_morado.svg";
import Button from "../../components/button/button";
import { Button_class } from "../../components/button/button.jsx";
import Input from "../../components/input/input";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFormSubmit = (e) => {
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsSuccess(true); // Assuming form submission is successful
    }, 1000);
  };

  return (
    <div
      id="contact"
      className={`contact_container ${isFormSubmitted ? "submitted" : ""} ${
        isSuccess ? "success" : ""
      } ${isError ? "error" : ""}`}
    >
      <div className="side_a">
        <h2>{t("contact.sidea.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("contact.sidea.text") }} />
        <div className="phone">
          <Phone />
          <p>+52 3314838300</p>
        </div>
        <div className="mail">
          <Mail />
          <p>axolotelabs@gmail.com</p>
        </div>
      </div>
      <form
        className="side_b"
        id="contact_form"
        method="POST"
        action="php/send_email.php" // The PHP file to handle form submission
        onSubmit={handleFormSubmit}
      >
        <Input
          input_type="text"
          input_icon={<User />}
          input_text={t("contact.sideb.input1")}
          name="nameData" // Add name attribute to be sent via POST
        />
        <Input
          input_type="email"
          input_icon={<PurpleMail />}
          input_text={t("contact.sideb.input2")}
          name="emailData" // Add name attribute
        />
        <textarea
          name="messageData"
          placeholder={t("contact.sideb.textarea")}
          required={true}
        />
        <Button
          text={t("contact.sideb.button")}
          button_select={Button_class.pink}
        />
      </form>
      {isFormSubmitted && (
        <div className="side_submit">
          <h2>{`${
            isSuccess
              ? t("contact.submit.success")
              : t("contact.submit.failure")
          }`}</h2>
        </div>
      )}
    </div>
  );
};

export default Contact;
