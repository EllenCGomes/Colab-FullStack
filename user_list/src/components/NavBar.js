import purpleLogo from "../img/purpleLogo.png"

const NavBar = () => {
    return (
        <div className="navBar">
            <img className="navBarImg" src={purpleLogo} alt="company logo" />
            <p className="navBarText">Nossos usuários</p>
        </div>
    )
}

export default NavBar