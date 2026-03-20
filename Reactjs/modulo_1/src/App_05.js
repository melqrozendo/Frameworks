/*
O App.js tem a função de centralizar todo os componentes criados
*/
// importa coisas para esse componete App.js
import './App.css';
import RenderLista from './componentes/RenderLista';

function App() {

  // inserir lista que pode vir do backend
  const meusItens = ['React', 'Vue', 'Angular']
  
  return (
    <div className="App">
      <h2>Renderização de Listas</h2>
      <RenderLista itens={meusItens}/>
    </div>
  );
}

export default App;
