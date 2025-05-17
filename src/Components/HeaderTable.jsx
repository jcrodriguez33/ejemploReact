function HeaderTabla({ columnas }) {
    const style = {
        fontFamily:"Arial",
        backgroundColor:"yelow"
    }
    return (
        <thead>
            <tr style={style}>
                {
                    columnas.map(texto => <th>{texto}</th>)
                }
            </tr>
        </thead>
    );
}

export default HeaderTabla;