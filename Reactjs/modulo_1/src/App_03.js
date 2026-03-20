/*
O App.js tem a função de centralizar todo os componentes criados
*/
// importa coisas para esse componete App.js
import './App.css';
// importando componente com evento
import Evento from './componentes/Evento'
import Form from './componentes/Form'

function App() {
  return (
    <div className="App">
      <Evento/>
      <Form/>
    </div>
  );
}

export default App;
