import { useEffect, useState } from 'react'
import UsuarioForm from './views/UsuarioForm';
import UsuarioTabla from './views/UsuarioTabla';
import NavBar from './views/NavBar';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';

let nextId = 0;

function App() {
  const [usuarios, setUsuarios] = useState([{ id: 100, login: "Carlos", password: "12321" }, { id: 101, login: "Marina", password: "12321" }, { id: 102, login: "Mario", password: "12321" }]);
  const [usuario, setUsuario] = useState({});
  const [filtrados, setFiltrados] = useState([]);
  const [login, setLogin] = useState("");
  const [modo, setModo] = useState("list");

  const handleClickBuscar = () => {
    setFiltrados(usuarios.filter(usuario => usuario.login === login))
    setModo("search");
  }


  const handleSubmit = (e) => {
    //setUsuarios(usuarios => [...usuarios.filter(u => u.id !== usuario.id), usuario]);
    usuario.id = nextId++;
    //Aqui se debe validar los inputs
    setUsuarios([...usuarios, usuario]);
    setUsuario({});
  }

  const handleClickEdit = (usuarioEdit) => {
    setUsuario(usuarioEdit);
    setModo("edit");
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/pagina">Home</Link></li>
              <li><Link to="/usuarios">Usuarios</Link></li>
              <li><Link to="/usuario">Nuevo</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<UsuarioTabla usuarios={usuarios} handleClickEdit={handleClickEdit}></UsuarioTabla>}></Route>
            <Route path="/pagina" element={<h1>Pagina Principal</h1>}></Route>
            <Route path="/usuarios" element={<UsuarioTabla usuarios={usuarios} handleClickEdit={handleClickEdit}></UsuarioTabla>}></Route>
            <Route path="/usuario" element={<UsuarioForm usuario={[usuario, setUsuario]} handleSubmit={handleSubmit}></UsuarioForm>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
