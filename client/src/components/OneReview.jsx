import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const OneReview = (props) => {

    const {id} = useParams()

    const [oneReview, setOneReview] = useState({})

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/review/${id}`)
            .then((res) =>{
                console.log(res);
                console.log(res.data);
                setOneReview(res.data);
            })
            .catch((err) =>console.log(err))
        }, [])


    return(
        <div className="wrapper6">
                <div className="view-one">
                    <h1>{oneReview.product}</h1>
                    <h5>Rating: {oneReview.rating}</h5>
                    <p>Description: {oneReview.story}</p>
                <div>
                    <Link to={"/"}>Home</Link>
                </div>
                </div>
            </div>
    )
}

export default OneReview;