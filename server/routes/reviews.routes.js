const reviewController = require("../controllers/reviews.controllers")

module.exports = (app) => {
    app.post("/api/newreview", reviewController.createReview)
    app.get("/api/review/:id", reviewController.getOneReview)
    app.get("/api/allreviews", reviewController.getAllReviews)
    app.put("/api/editreview/:id", reviewController.editReview)
    app.delete("/api/deletereview/:id", reviewController.deleteReview)
}