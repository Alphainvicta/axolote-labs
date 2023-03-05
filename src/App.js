import './App.scss';
import Nav_bar from './sections/nav_bar/nav_bar.jsx';
import Main_screen from './sections/main_screen/main_screen';
import Logos_bar from './sections/logos_bar/logos_bar';
import Characteristics from './sections/characteristics/characteristics';
import Services from './sections/services/services';
import Reviews from './sections/reviews/reviews';
import About_us from './sections/about_us/about_us';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';


function App() {
  return (
    <div className="App">
      <Nav_bar/>
      <Main_screen/>
      <Logos_bar/>
      <Characteristics/>
      <Services/>
      <Reviews/>
      <About_us/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
