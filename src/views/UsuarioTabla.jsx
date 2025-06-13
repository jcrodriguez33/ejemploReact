import Titulo from "./Titulo";
import HeaderTabla from "./HeaderTable";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const style = {
    fontFamily:"Arial",
    fontSize:"15px"    
}

function UsuarioTabla() {
    const {entities} = useSelector((state) => state.users);
    const columnas = ["ID", "username", "email"];
    return (
        <div>
            <Titulo texto={"Lista de Usuarios"}></Titulo>
            <table border="1" style={{borderCollapse:"collapse"}}>
                <HeaderTabla columnas={columnas}></HeaderTabla>                
                <tbody>
                    {entities.map((usuario) => 
                        <tr style={style} key={usuario.id}>
                            <td style={{paddingLeft: "5px", paddingRight:"5px"}}>{usuario.id}</td>
                            <td style={{paddingLeft: "5px", paddingRight:"5px"}}>{usuario.username}</td>
                            <td style={{paddingLeft: "5px", paddingRight:"5px"}}>{usuario.email}</td>                            
                        </tr>                    
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UsuarioTabla;