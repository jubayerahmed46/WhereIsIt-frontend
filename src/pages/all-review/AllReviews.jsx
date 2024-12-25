import { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard";
import axios from "axios";
import Spinner from "../spinner/Spinner";

function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [loader, setLader] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/reviews`,
          {
            withCredentials: true,
          }
        );
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLader(false);
      }
    })();
  }, []);

  return (
    <div>
      <div className="container mx-auto  ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 my-5 mt-12 ">
          Our All Reviews
        </h2>
        {loader ? (
          <Spinner />
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <ReviewCard review={review} key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllReviews;
