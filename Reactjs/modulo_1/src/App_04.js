/*
O App.js tem a função de centralizar todo os componentes criados
*/
// importa coisas para esse componete App.js
import './App.css';
import Condicional from './componentes/Condicional';


function App() {
  return (
    <div className="App">
      <h2>Renderização Condicional</h2>
      <Condicional/>
    </div>
  );
}

export default App;
