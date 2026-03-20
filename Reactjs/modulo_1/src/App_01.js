/*
o App.js tem a função de centralizar todo os componentes criados
*/
// importa coisas para esse componete App.js
import './App.css';
import Frase from './componentes/Frase';
import Intro from './componentes/Intro';

function App() {
  // adicionar variaveis
  const name = 'Melq'
  const upperName = name.toUpperCase()
  // adicionar condicoes if/else

  // adicinano funcoes
  function sum(a,b) {
    return a * b
  }

  // adicionar url dinamica
  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro código em reactjs</p>
      <Intro/>
      <p>Nome do Desenvolvedor {name} ou {upperName} </p>
      <p>Soma:  {2+1}</p>
      <p>Somatorido de dados: {sum(1,4)}</p>
      <img src={url} alt="imagem"></img>
      <p></p>
    </div>
  );
}

export default App;
