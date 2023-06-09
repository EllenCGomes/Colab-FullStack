const getUsers = async (request, response, next) => {

    try {
        const { results } = await (await fetch("https://randomuser.me/api/?results=50&noinfo")).json()

        const data = results.map(item => {
            return {
                name: `${item.name.first} ${item.name.last}`,
                gender: item.gender === "female" ? "Feminino" : "Masculino",
                location: `${item.location.city}, ${item.location.state}, ${item.location.country}`,
                email: item.email,
                age: item.dob.age,
                registered: item.registered.date.split("-")[0],
                cell: item.cell,
                nat: item.nat
            }
        })


        // const type = typeof data
        // console.log(type);

        response.send(data)

    } catch (exception) {
        next(exception)
    }

}


module.exports = getUsers