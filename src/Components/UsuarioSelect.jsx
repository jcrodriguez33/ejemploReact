import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UsuarioSelect({usuarios, usuario}){
    const [usuarioEdit, setUsuarioEdit] = usuario;
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        const encontrados =  usuarios.filter(u => u.id == id );    
        setUsuarioEdit(encontrados[0]);
        navigate("/usuario");
    }, [id])    
}

export default UsuarioSelect;