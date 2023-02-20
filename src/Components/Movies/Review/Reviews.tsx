//react
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//lib
import Axios from 'axios';
//components
import { NoReview } from './NoReview';
import { ReviewType } from '../../../types/Review';
import { apiKey } from '../../ApiKey';

const Reviews = () => {
  const [review, setReview] = useState<ReviewType[]>([]);
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
        <ul style={{ width: '1200px', margin: '0 auto' }}>
          {review.map(({ id, author, content, author_details, created_at }) => (
            <li key={id}>
              <div>
                <h1>{author_details.name ? author_details.name : author}</h1>
                <img
                  width={50}
                  src={
                    author_details.avatar_path
                      ? `https://www.themoviedb.org/t/p/w45_and_h45_face/${author_details.avatar_path.slice(
                          1
                        )}`
                      : 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
                  }
                  alt=""
                />
                <span>Raiting: {author_details.rating}</span>
              </div>

              <div>{created_at}</div>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
