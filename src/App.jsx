import { useEffect, useState } from 'react'
import UsuarioForm from './views/UsuarioForm';
import UsuarioTabla from './views/UsuarioTabla';
import NavBar from './views/NavBar';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import UsuarioSelect from './Components/UsuarioSelect';

let nextId = 0;

function App() {
  
  const [usuario, setUsuario] = useState({});
  const [filtrados, setFiltrados] = useState([]);
  const [login, setLogin] = useState("");
  const [modo, setModo] = useState("list");

  const handleClickBuscar = () => {
    //setFiltrados(usuarios.filter(usuario => usuario.login === login))
    setModo("search");
  }


/*   const handleSubmit = (e) => {
    if (typeof usuario.id === "undefined"){
      usuario.id = nextId++;
      //Aqui se debe validar los inputs
      setUsuarios([...usuarios, usuario]);
    } else {
      setUsuarios(usuarios => [...usuarios.filter(u => u.id !== usuario.id), usuario]);
    }    
    setUsuario({});
  }
 */
 /*  const handleClickEdit = (usuarioEdit) => {
    setUsuario(usuarioEdit);
    setModo("edit");
  }
 */
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
            <Route index element={<UsuarioTabla></UsuarioTabla>}></Route>
            <Route path="/pagina" element={<h1>Pagina Principal</h1>}></Route>
            <Route path="/usuarios" element={<UsuarioTabla></UsuarioTabla>}></Route>
            <Route path="/usuario" element={<UsuarioForm></UsuarioForm>}></Route>
            <Route path='/usuarios/:id/editar' element={<UsuarioSelect usuario={[usuario, setUsuario]}></UsuarioSelect>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
