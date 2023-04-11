const errorHandler = (error, request, response, next) => {
    if (error.name === "fetch failed") {
        return response.status(500).json({ error: "Error accessing data. Please refresh the page" })
    }

    next(error)
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" })
};

module.exports = { errorHandler, unknownEndpoint }