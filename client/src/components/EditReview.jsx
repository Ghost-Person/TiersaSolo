import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


const EditReview = (props) => {
  const { id } = useParams()
  const [product, setProduct] = useState("")
  const [rating, setRating] = useState("")
  const [story, setStory] = useState("")
  const [errors, setErrors] = useState({})
  const [notFound, setNotFound] = useState("")
  console.log(id)
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/review/${id}`)
      .then((response) => {
        console.log(response.data)
        setProduct(response.data.product)
        setRating(response.data.rating)
        setStory(response.data.story)
      })
      .catch((err) => {
        console.log(err.response);
        setNotFound(`Product not found`);
      });
  }, []);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/editreview/${id}`, { product, rating, story })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };


  return (
    <div className="wrapper6">
        <form onSubmit={submitHandler}>
          <div>
            <h1 className="edit-review">Edit Review</h1>
        {notFound ? (
            <h2>
            {notFound} <Link to="/newreview">New Review</Link>
            </h2>
        ) : null}
        </div>
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
                <div><Link to="/">Home</Link></div>
        </form>
    </div>
  )
}

export default EditReview