import { useState } from "react";

let nextId = 0;
function UsuarioForm(props){
    const [usuarios,  setUsuarios] = props.usuariosList;
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [modoFiltro, setModoFiltro] = props.modoFiltro;
    
    const handleSumbit = (e) => {
        e.preventDefault();
        //Aqui se debe validar los inputs
        setUsuarios([...usuarios, {id: nextId++, login: login, password: password}]);
        setLogin("");
        setPassword("");
        setModoFiltro(false);
    }

    return (
        <div>
            <h5>Usuario</h5>
            <form  action="" onSubmit={handleSumbit}>
                <label>Login:</label>
                <input id="login" type="text" value={login} onChange={(e) => setLogin(e.target.value)}></input>
                <br></br>
                <label>Password:</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br></br>
                <button>Guardar</button>
            </form>
        </div>
    )
}
export default UsuarioForm