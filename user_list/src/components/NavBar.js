import purpleLogo from "../img/purpleLogo.png"
import whiteLogo from "../img/whiteLogo.png"
const NavBar = () => {
    return (
        <div className="navBar">
            <img className="navBarImg" src={purpleLogo} alt="company logo" />
            <p>Nossos usuarios</p>
        </div>
    )
}

export default NavBar