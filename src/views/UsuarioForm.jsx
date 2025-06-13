import { useState } from "react";
import Titulo from "../views/Titulo";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {add}  from "../usersSlice";

function UsuarioForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lastId = useSelector((state) => state.users.entities.length);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: lastId + 1,
            username,
            email
        }
        dispatch(
            add(data)
        )        
        navigate("/usuarios");
        setUsername("");
        setEmail("")
    }
    return (
        <div>
            <Titulo texto={"Registro Usuario"}></Titulo>
            <form action="" onSubmit={handleSubmit}>
                <label>Username:</label>
                <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <br></br>
                <label>Email:</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br></br>
                <button>Guardar</button>
            </form>
        </div>
    )
}
export default UsuarioForm