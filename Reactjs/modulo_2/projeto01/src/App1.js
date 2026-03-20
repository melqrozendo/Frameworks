// import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Smart from './components/Smart';
import Perfil from './components/Perfil';
import Perfil2 from './components/Perfil2';
import List from './components/List';

function App() {
  //Interpolando variaveis 
  const name = 'Rozendo';
  const newName = name.toUpperCase();

  function soma(a,b) {
    return a + b;
  }

  // Alteração de atributos
  const url = 'http://via.placeholder.com/150';
  const foto = '/logo192.png';
  const nome = 'Melquisia';

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <p>My first App..</p>
      <p>Programador {name}</p>
      <p>{newName}</p>
      <p>Resultado: {soma(5,3)}</p>
      <img src={foto} alt='Minha Imagem' />
      <Menu />
      <Smart nome="Rozendo" />
      <Smart nome={nome} />
      <Perfil
        nome="Rodrigo"
        idade="27"
        cargo="Programador"
        foto={foto}
      />
      {/* <Perfil2
        nome="Melissa"
        idade="25"
        cargo="Programador(a)"
        foto={foto}
      /> */}
      <List/>
    </div>
  );
}

export default App;
