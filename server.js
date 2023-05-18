const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const {getObject} = require("./controller.js")

app.get("/get-object", getObject)


app.listen(4000, () => {
    console.log("up on 4000")
})