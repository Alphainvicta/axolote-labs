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

  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [messageData, setMessageData] = useState("");
  const [isFormButtonSubmitted, setIsFormButtonSubmitted] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    setIsFormButtonSubmitted(true);
    e.preventDefault();

    const formData = {
      nameData,
      emailData,
      messageData,
    };

    const jsonData = JSON.stringify(formData, null, 2);

    try {
      const response = await fetch(
        "https://axolote-emailserver.onrender.com/apiPOL/",
        {
          method: "POST",
          body: jsonData,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setIsSuccess(true);
      setIsError(false);
      console.log("Response data:", responseData);
    } catch (error) {
      console.error("Error:", error.message);
      setIsSuccess(false);
      setIsError(true);
    }
    setIsFormSubmitted(true);
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
      <form className="side_b" id="contact_form" onSubmit={handleSubmit}>
        <Input
          input_type="text"
          input_icon={<User />}
          input_text={t("contact.sideb.input1")}
          onChange={(e) => setNameData(e.target.value)}
        />
        <Input
          input_type="email"
          input_icon={<PurpleMail />}
          input_text={t("contact.sideb.input2")}
          onChange={(e) => setEmailData(e.target.value)}
        />
        <textarea
          name="Message"
          onChange={(e) => setMessageData(e.target.value)}
          placeholder={t("contact.sideb.textarea")}
          required={true}
        />
        {!isFormButtonSubmitted && (
          <Button
            text={t("contact.sideb.button")}
            button_select={Button_class.pink}
          />
        )}
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
