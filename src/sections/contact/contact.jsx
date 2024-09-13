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
  const [formData, setFormData] = useState({
    nameData: "",
    emailData: "",
    messageData: "",
  });

  // Update form data on input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission with API call
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit behavior
    setIsFormSubmitted(true);

    try {
      const response = await fetch("https://api.axolotelabs.com/email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(), // Format data as URL-encoded
      });

      if (response.status === 200) {
        setIsSuccess(true); // Set success state if the response is successful
        setIsError(false);
      } else {
        setIsError(true); // Set error state if response is not 200
        setIsSuccess(false);
      }
    } catch (error) {
      setIsError(true); // Set error state if an exception occurs
      setIsSuccess(false);
    }
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
          <p>+52 3319128876</p>
        </div>
        <div className="mail">
          <Mail />
          <p>cotizaciones@axolotelabs.com</p>
        </div>
      </div>

      <form className="side_b" id="contact_form" onSubmit={handleFormSubmit}>
        <Input
          input_type="text"
          input_icon={<User />}
          input_text={t("contact.sideb.input1")}
          name="nameData"
          value={formData.nameData}
          onChange={handleInputChange}
        />
        <Input
          input_type="email"
          input_icon={<PurpleMail />}
          input_text={t("contact.sideb.input2")}
          name="emailData"
          value={formData.emailData}
          onChange={handleInputChange}
        />
        <textarea
          name="messageData"
          placeholder={t("contact.sideb.textarea")}
          required={true}
          value={formData.messageData}
          onChange={handleInputChange}
        />
        <Button
          text={t("contact.sideb.button")}
          button_select={Button_class.pink}
        />
      </form>

      {(isError || isSuccess) && isFormSubmitted && (
        <div className="side_submit">
          <h2>
            {isSuccess
              ? t("contact.submit.success")
              : t("contact.submit.failure")}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Contact;
