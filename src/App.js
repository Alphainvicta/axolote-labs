import "./App.scss";
import React, { useEffect } from "react";
import NavBar from "./sections/nav_bar/nav_bar.jsx";
import MainScreen from "./sections/main_screen/main_screen.jsx";
import LogosBar from "./sections/logos_bar/logos_bar";
import Characteristics from "./sections/characteristics/characteristics";
import Services from "./sections/services/services";
import Reviews from "./sections/reviews/reviews";
import AboutUs from "./sections/about_us/about_us";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";

import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <div className="App">
      <NavBar />
      <MainScreen />
      <LogosBar />
      <Services />
      <Reviews />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
