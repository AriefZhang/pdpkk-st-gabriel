require("dotenv").config()

const cors = require("cors")
const express = require("express")
const app = express()
const port = process.env.PORT

const router = require("./routes")
// const errorHandler = require("./middlewares/errorHandlers");

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", router)

// app.use(errorHandler)

app.listen(port, () => {
  console.log("server is running at port: " + port)
})
