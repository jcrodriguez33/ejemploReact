import { useState } from "react";
import Logo from "./Logo"
import Styles from "./NavBar.module.css"
const styles = {
    navBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"cyan"
    }
}

function NavBar(props) {
    const [login,  setLogin] = props.login;
    return (
        <nav style={styles.navBar}>
            <div>
                <Logo></Logo>
            </div>
            <div className={Styles.horizontal}>
                <a href="#">Operaciones</a>
                <a href="#">Ayuda</a>
            </div>
            <div className={Styles.horizontal}>
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} ></input>
                <button onClick={props.handleClickBuscar}>Buscar</button>
            </div>
        </nav>

    );
}
export default NavBar;

