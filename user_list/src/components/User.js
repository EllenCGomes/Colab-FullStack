import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

const User = ({ user }) => {
    const [buttonStyle, setButtonStyle] = useState("button")
    const [visible, setVisible] = useState(false)

    const showDetails = () => {
        setVisible(!visible)
    }
    const display = { display: visible ? "" : "none" }

    return (
        <div className="mainStyle">
            <div className="primaryInfo">
                <p className="inline purpleColor userTitle">Nome: <span className="navBlueColor info">{user.name}</span></p>
                <ReactCountryFlag countryCode={user.nat} svg style={{
                    width: "2em",
                    height: "2em",
                    margin: "0 5em"
                }} />
                <button className={buttonStyle} onMouseEnter={() => setButtonStyle("onHover")} onMouseLeave={() => setButtonStyle("button")} onClick={showDetails}>{visible ? "Esconder" : "Ver Detalhes"}</button>
            </div>
            <div style={display}>
                <h3 className="navBlueColor">Detalhes</h3>
                <p className="purpleColor userTitle">Email: <span className="navBlueColor info">{user.email}</span></p>
                <p className="purpleColor userTitle">Telefone: <span className="navBlueColor info">{user.cell}</span></p>
                <p className="purpleColor userTitle">Idade: <span className="navBlueColor info">{user.idade}</span></p>
                <p className="purpleColor userTitle">Endereço: <span className="navBlueColor info">{user.location}</span></p>
                <p className="purpleColor userTitle">Gênero: <span className="navBlueColor info">{user.gender}</span></p>
                <p className="purpleColor userTitle">Data de Registro: <span className="navBlueColor info">{user.registered}</span></p>
            </div>
        </div>
    )
}

export default User
