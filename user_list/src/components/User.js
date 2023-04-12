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
        <div className="border">
            <div className="primaryInfo">
                <p className="navBlueColor info nameInput">{user.name}</p>
                <ReactCountryFlag countryCode={user.nat} svg style={{
                    width: "2em",
                    height: "2em",
                    margin: "0 auto"
                }} />
                <button className={buttonStyle} onMouseEnter={() => setButtonStyle("onHover")} onMouseLeave={() => setButtonStyle("button")} onClick={showDetails}>{visible ? "Fechar" : "Ver"}</button>
            </div>
            <div style={display}>
                <p className="purpleColor userTitle">Email: <span className="navBlueColor info">{user.email}</span></p>
                <p className="purpleColor userTitle">Telefone: <span className="navBlueColor info">{user.cell}</span></p>
                <p className="purpleColor userTitle">Idade: <span className="navBlueColor info">{user.age}</span></p>
                <p className="purpleColor userTitle">Endereço: <span className="navBlueColor info">{user.location}</span></p>
                <p className="purpleColor userTitle">Gênero: <span className="navBlueColor info">{user.gender}</span></p>
                <p className="purpleColor userTitle">Registrado desde: <span className="navBlueColor info">{user.registered}</span></p>
            </div>
        </div>
    )
}

export default User
