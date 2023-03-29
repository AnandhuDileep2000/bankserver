const mongoose = require("mongoose")

// connection string
mongoose.connect("mongodb://localhost:27017/bankserver", { useNewUrlParser: true })

// model creation
// schema means fields and values
const User = mongoose.model("user",
    {
        username: String,
        acno: Number,
        password: String,
        balance: Number,
        transaction: []
    }
)

module.exports={
    User
}