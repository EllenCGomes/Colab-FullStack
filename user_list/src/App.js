import usersService from "./services/users"
import User from "./components/User"
import NavBar from "./components/NavBar"
import "./index.css"
import { useEffect, useState } from "react"

const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    usersService.getAll().then(user => setUsers(user))
  }, [])

  console.log(users);

  return (
    <div>
      <NavBar />
      <p className="navBlueColor mainPadding pageTitle">Está na dúvida e quer de saber mais sobre o <span className="purpleColor">Colab</span>?<br />
        Converse com alguns de nossos agentes!</p>
      <div className="userListContainer mainPadding">
        {users.map(user =>
          <User key={user.email} user={user} />)}
      </div>

    </div>
  );
}

export default App;
