let objects = require("./db.json")

module.exports = {
    getObject: (req, res) => {
        let objIndex = Math.floor(Math.random() * objects.length)
        console.log(objIndex)
        res.status(200).send(objects[objIndex])
    }
}