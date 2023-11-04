const mongoose = require("mongoose")

const ReviewsSchema = new mongoose.Schema({
    product: {
        type: String,
        required:[true, 'Product or service type is required'],
        minLength: [3, 'Must be at least 3 chartacters long'],
    },
    rating: {
        type: Number,
        required: [true, 'Please rate your product or service 1-5']
    },
    story: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Review", ReviewsSchema)