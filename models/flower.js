const mongoose = require("mongoose")
const flowerSchema = mongoose.Schema({
type: String,
colour: String,
cost: Number
})
module.exports = mongoose.model("flower", flowerSchema)