const getUsers = async (request, response, next) => {

    try {
        const data = await (await fetch("https://randomuser.me/api/?results=10&noinfo")).json()

        // const type = typeof data
        // console.log(type);

        response.send(data)
    } catch (exception) {
        next(exception)
    }

}


module.exports = getUsers