const express = require("express")
const app = express()
const middleware = require("./utils/middleware")
const usersRouter = require("./routes/users")

app.use("/usuarios", usersRouter)
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);


module.exports = app