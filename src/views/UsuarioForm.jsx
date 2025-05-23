import { useState } from "react";
import Titulo from "../views/Titulo";
import { useNavigate } from "react-router-dom";

function UsuarioForm({usuario, handleSubmit}){
    const[usuarioEdit, setUsuarioEdit] = usuario;
    const navigate = useNavigate();
    return (
        <div>
            <Titulo texto={"Registro Usuario"}></Titulo>
            <form  action="" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                navigate("/usuarios");
            }}>
                <label>Login:</label>
                <input id="login" type="text" value={usuarioEdit.login} onChange={(e) => setUsuarioEdit({...usuarioEdit, login:e.target.value})}></input>
                <br></br>
                <label>Password:</label>
                <input id="password" type="password" value={usuarioEdit.password} onChange={(e) => setUsuarioEdit({...usuarioEdit, password:e.target.value})}></input>
                <br></br>
                <button>Guardar</button>
            </form>
        </div>
    )
}
export default UsuarioForm