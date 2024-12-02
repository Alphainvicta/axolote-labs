import React, { useState, useEffect } from "react";
import "./contact_style.scss";
import { ReactComponent as Phone } from "../../icons/TELEFONO.svg";
import { ReactComponent as Mail } from "../../icons/CORREO.svg";
import { ReactComponent as User } from "../../icons/User.svg";
import { ReactComponent as PurpleMail } from "../../icons/Correo_morado.svg";
import { ReactComponent as Logo } from "../../icons/LOGO_AXOLOTL_LABS.svg";
import Button from "../../components/button/button";
import { Button_class } from "../../components/button/button.jsx";
import Input from "../../components/input/input";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [formData, setFormData] = useState({
    nameData: "",
    emailData: "",
    messageData: "",
  });

  // State for dynamic dots
  const [loadingDots, setLoadingDots] = useState("");

  useEffect(() => {
    if (!isFormSubmitted) return;

    const interval = setInterval(() => {
      setLoadingDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, [isFormSubmitted]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    try {
      const response = await fetch(
        "https://api.axolotelabs.com/axolote_labs/email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      if (response.status === 200) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    if (isSuccess == null) return;
    const waitForDelay = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      await new Promise((resolve) => setTimeout(resolve, 500));
      defaultValues();
    };

    waitForDelay();
  }, [isSuccess]);

  const defaultValues = () => {
    setFormData({
      nameData: "",
      emailData: "",
      messageData: "",
    });
    setIsFormSubmitted(false);
    setIsSuccess(null);
  };

  return (
    <div
      id="contact"
      className={`contact_container ${
        isFormSubmitted ? `submitted ${isSuccess ? "success" : "error"}` : ""
      }`}
    >
      {isFormSubmitted ? (
        isSuccess != null ? (
          <div className="side_submit">
            <h2>
              {isSuccess
                ? t("contact.submit.success")
                : t("contact.submit.failure")}
            </h2>
          </div>
        ) : (
          <div className="side_loading">
            <div className="logo_cont">
              <Logo />
            </div>
            <h2>
              {t("contact.submit.loading")}
              {loadingDots}
            </h2>
          </div>
        )
      ) : (
        <>
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
          <form
            className="side_b"
            id="contact_form"
            onSubmit={handleFormSubmit}
          >
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
        </>
      )}
    </div>
  );
};

export default Contact;
