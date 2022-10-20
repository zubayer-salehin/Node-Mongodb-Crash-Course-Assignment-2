const mongoose = require("mongoose");


// Schema Design
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide a Tour name"],
        trim: true,
        unique: [true, "Tour name Must have a Unique"],
        minLength: [3, "Tour name must have at least 3 Characters"],
        maxLength: [100, "Tour name must have at least 100 Characters"]
    },
    description: {
        type: String,
        required: [true, "Please Provide a Tour description"],
        trim: true,
        minLength: [10, "Description must have at least 10 Characters"],
        maxLength: [250, "Description must have at least 250 Characters"]
    },
    price: {
        type: Number,
        required: [true, "Please Provide a Price of Tour"],
        trim: true,
        min: [0, "Price Can't be Negative"],
    },
    capital: {
        type: String,
        required: [true, "Please Provide a Tour capital"],
        trim: true
    },
    image: {
        type: String,
        required: [true, "Please Provide a Tour image"],
        trim: true
    },
    veiw: {
        type: Number,
        required: true
    }
})


// Schema -> Model -> Query
const Tour = mongoose.model("tours", tourSchema)


module.exports = Tour;