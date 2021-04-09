const mongoose = require("mongoose")
const flowerSchema = mongoose.Schema({
type: String,
color: String,
cost: Number
})
module.exports = mongoose.model("Flower", flowerSchema)