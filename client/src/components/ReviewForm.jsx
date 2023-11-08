import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const ReviewForm = () => {
  const [product, setProduct] = useState("")
  const [rating, setRating] = useState("")
  const [story, setStory] =useState("")
  const [errors, setErrors] = useState("")
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/newreview", { 
        product,
        rating,
        story
     })
      .then((response) => {
        console.log(response)

        setProduct("")
        setRating("")
        setStory("")

        navigate("/")
      })
      .catch((err) => {
        console.log(err.response.data.err.errors)
        setErrors(err.response.data.err.errors)
      })
  }

  return (
    <div className="wrapper5">
        <h1 className="new-review">Your Review</h1>
        
          <div className="row">
            <div className="col-4">
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="product">Your Product:</label>
                  <input
                    onChange={(e) => setProduct(e.target.value)}
                    value={product}
                    id="product"
                    class="form-control"
                    type="text"
                  />
                  {errors.product ? <p>{errors.product.message}</p> : null}
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="rating">Your Rating:</label>
                <input
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    id="rating"
                    class="form-control"
                    type="number"
                    min={1}
                    max={5}
                  />
                  {errors.rating ? <p>{errors.rating.message}</p> : null}
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="story">Your Story:</label>
                <textarea
                    onChange={(e) => setStory(e.target.value)}
                    value={story}
                    id="story"
                    class="form-control"
                    rows="3"
                    ></textarea>
                </div>
                <button className="btn btn-outline-primary" type="submit">
                  SUBMIT
                </button>
                <Link to="/">Home</Link>
              </form>
            </div>
          </div>
    </div>
  )
}

export default ReviewForm