import './App.scss';
import Nav_bar from './sections/nav_bar/nav_bar.jsx';
import Main_screen from './sections/main_screen/main_screen';
import Logos_bar from './sections/logos_bar/logos_bar';

function App() {
  return (
    <div className="App">
      <Nav_bar/>
      <Main_screen/>
      <Logos_bar/>
    </div>
  );
}

export default App;
