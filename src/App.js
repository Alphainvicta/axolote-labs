import './App.scss';
import Button from './components/button/button.jsx';
import { Button_class } from './components/button/button.jsx';
import { Icon_class } from './components/button/button.jsx';

function App() {
  return (
    <div className="App">
      <Button text='Contacto' button_select={Button_class.clear}/>
      <Button text='Servicios' button_select={Button_class.purple}/>
      <Button text='Cotiza aqui' button_select={Button_class.pink} icon_select={Icon_class.behance}/>
    </div>
  );
}

export default App;
