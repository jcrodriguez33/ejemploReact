function Titulo({texto}){
    const style = {
        fontFamily: "Arial",
        fontSize:"14pt",
        margin: "4px"
    }

    return(
        <h3 style={style} >{texto}</h3>
    );
}
export default Titulo;