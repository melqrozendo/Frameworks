/*
O App.js tem a função de centralizar todo os componentes criados
*/
// importa coisas para esse componete App.js
import './App.css';
import Intro from './componentes/Intro';
// importando componentes com uso de props
import UseProps from './componentes/UseProps';
import Pessoa from './componentes/Pessoa';
// use de struct com props
import UseStruct from './componentes/UseStruct';
// usando fragments
import List from './componentes/List';

function App() {
  return (
    <div className="App">
      <Intro/>
      <UseProps nome="FrontEnd"/>
      <Pessoa nome="Melq" idade="25" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <UseStruct
        marca="Ford"
        modelo="KA"
        ano="2021"
        valor="65.000"
      />
      <List/>
    </div>
  );
}

export default App;
