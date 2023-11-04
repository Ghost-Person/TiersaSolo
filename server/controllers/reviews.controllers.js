const Review = require("../models/reviews.models")

const createReview = (req, res) => {
    Review.create(req.body)
    .then((newReview) => {
        res.json({newReview})
    })
    .catch((err) => {
        res.status(400).json({err})
    })
}

const getOneReview = (req, res) => {
    Review.findOne({_id: req.params.id})
    .then((oneReview) => {
        res.json(oneReview)
    })
    .catch((err) => {
        res.status(400).json({err})
    })
}

const getAllReviews = (req, res) => {
    Review.find()
    .then((allReviews) => {
        res.json(allReviews)
    })
    .catch((err) => {
        res.status(400).json({err})
    })
}

const editReview = (req, res) => {
    Review.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((editedReview) => {
        res.json({editedReview})
    })
    .catch((err) => {
        res.status(400).json({err})
    })
}

const deleteReview = (req, res) => {
    Review.deleteOne({_id: req.params.id})
    .then((deletedResponse) => {
        res.json({deletedResponse})
    })
    .catch((err) => {
        res.status(400).json({err})
    })
}

module.exports = {
    createReview,
    getOneReview,
    getAllReviews,
    editReview,
    deleteReview,
}