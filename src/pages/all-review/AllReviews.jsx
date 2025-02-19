import { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard";
import Spinner2 from "../spinner/Spinner2";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { toast } from "react-hot-toast";
import SectionHeading from "../../components/SectionHeading";

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

  return (
    <div>
      <div className="mx-auto max-w-7xl lg:px-9 md:px-5 px-3 mb-10">
        <SectionHeading>Meet Out Best Users Review</SectionHeading>

        {loader ? (
          <Spinner2 />
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
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
