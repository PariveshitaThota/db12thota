const mongoose = require("mongoose")
const flowerSchema = mongoose.Schema({
type: String,
colour: {
    type: String,
    minimumLength: 10
},
cost: {
    type: Number,

        min:[10,"Minimum cost of flower"],
        max:[100,"Maximum cost of flower"]
}
})
module.exports = mongoose.model("flower", flowerSchema)