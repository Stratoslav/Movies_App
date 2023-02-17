import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { NoReview } from "../NoReview";

const apiKey = "be91785ae562dae75d4f006499f353c9";

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`
    ).then(({ data }) => {
      setReview(data.results);
      console.log(data.results);
    });
  }, [id]);

  return (
    <>
      {review.length === 0 ? (
        <NoReview />
      ) : (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <h3>AUTHOR: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
