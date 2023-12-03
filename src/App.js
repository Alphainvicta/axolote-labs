import "./App.scss";
import NavBar from "./sections/nav_bar/nav_bar.jsx";
import MainScreen from "./sections/main_screen/main_screen.jsx";
import LogosBar from "./sections/logos_bar/logos_bar";
import Characteristics from "./sections/characteristics/characteristics";
import Services from "./sections/services/services";
import Reviews from "./sections/reviews/reviews";
import AboutUs from "./sections/about_us/about_us";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainScreen />
      <LogosBar />
      <Characteristics />
      <Services />
      <Reviews />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
