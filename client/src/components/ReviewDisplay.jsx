import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"



const ReviewDisplay = () => {
    const [allReviews, setAllReviews] = useState([])
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/allreviews")
        .then((response) => {
            console.log(response.data)
            setAllReviews(response.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }, [])

    const deleteReview = (idToDelete) => {
        axios
        .delete(`http://localhost:8000/api/deletereview/${idToDelete}`)
        .then((res) => {
            console.log(res.data);
            const deleteFunction = allReviews.filter((review, index) => review._id !== idToDelete)
            setAllReviews(deleteFunction)
        })
        .catch((err) => {
            console.log(err)
        }) 
    }


    return (
        <div className="wrapper">
            <h1 className="review-table">Reviews</h1>
            <div className="row">
                <div className="col-8">
                    <Link to="/newreview">Add a Review</Link>
                    <h3>The Reviews Are In!</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Review</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allReviews.map((review, index) => {
                                return (
                                    <tr key={review._id}>
                                        <td><Link to={`/review/${review._id}`}>{review.product}</Link></td>
                                        <td>
                                            <Link to={`/editreview/${review._id}`}>
                                                <button className="btn btn-outline-primary">Edit</button>
                                            </Link>

                                            <button className="btn btn-outline-primary" onClick={() => deleteReview(review._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
            <Link to={"/main"}>Main Page</Link>
        </div>
    )
}


export default ReviewDisplay