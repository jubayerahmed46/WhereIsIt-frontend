import { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard";
import Spinner from "../spinner/Spinner";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { toast } from "react-hot-toast";

function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  const instance = useAxiosInstance();

  useEffect(() => {
    (async function fetchPosts() {
      try {
        const { data } = await instance.get("/reviews");
        setReviews(data);
      } catch (err) {
        toast.error("Error fetching posts:", err.message);
      } finally {
        setLoader(false);
      }
    })();
  }, [instance]);

  if (loader) {
    return <Spinner />;
  }

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
