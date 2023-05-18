const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '261ba92250bf4580925a2702d61be1b3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const {getObject} = require("./controller.js")

app.get("/get-object", getObject)


app.listen(4000, () => {
    console.log("up on 4000")
})