import { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard";
import axios from "axios";

function AllReviews() {
  const [reviews, setReviews] = useState([]);

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
      }
    })();
  }, []);
  return (
    <div>
      <div className="container mx-auto  ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 my-5 mt-12 ">
          Our All Reviews
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2">
          {reviews.map((review, i) => (
            <ReviewCard review={review} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllReviews;
