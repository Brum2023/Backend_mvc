const express = require("express")

const testRoutes = require("./routes/testRoutes")

const generosRoutes = require("./routes/generoRoutes")

const app = express()

app.use(express.json())
app.use("/test", testRoutes)
app.use("/generos",generosRoutes)
app.get("/", (req, res) => {
    res.send("API locadora funcionando!")
})

module.exports = app