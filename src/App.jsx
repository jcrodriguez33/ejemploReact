import { useState } from 'react'
import UsuarioForm from './Components/UsuarioForm';
import UsuarioTabla from './Components/UsuarioTabla';
import NavBar from './Components/NavBar';

function App() {
  const [usuarios, setUsuarios] = useState([{ id: 100, login: "Carlos", password: "12321" }, { id: 101, login: "Marina", password: "12321" }, { id: 102, login: "Mario", password: "12321" }]);
  const [filtrados, setFiltrados] = useState([]);
  const [login, setLogin] = useState("");
  const [modoFiltro, setModoFiltro] = useState(false);

  const handleClickBuscar = () => {
    setFiltrados(usuarios.filter(usuario => usuario.login === login))
    setModoFiltro(true);
  }
  
  return (
    <>
      <div>
        <NavBar handleClickBuscar={handleClickBuscar} login={[login, setLogin]}></NavBar>
        <UsuarioForm usuariosList={[usuarios, setUsuarios]} modoFiltro={[modoFiltro, setModoFiltro]}></UsuarioForm>
        {!modoFiltro ? (
          <UsuarioTabla usuarios={usuarios}></UsuarioTabla>
        ) : (
          <UsuarioTabla usuarios={filtrados}></UsuarioTabla>
        )}


      </div>
    </>
  )
}

export default App
