import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button1 from "../../components/common/btns/Button1";
import { IoIosAddCircleOutline } from "react-icons/io";
import ReviewSlider from "./ReviewSlider";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import ReviewModal from "./ReviewModal";
import { useEffect, useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import toast from "react-hot-toast";

export default function Reviews() {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const instance = useAxiosInstance();

  useEffect(() => {
    (async function fetchPosts() {
      try {
        const { data } = await instance.get("/reviews");
        setReviews(data);
      } catch (err) {
        toast.error("Error fetching posts:", err.message);
      }
    })();
  }, [instance]);

  return (
    <div className="container mx-auto  ">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 my-5 mt-12 ">
        Our Reviews
      </h2>
      <div className="border rounded-md px-2 shadow-sm py-5 bg-white">
        <ReviewSlider reviews={reviews} />
        <div className="flex justify-center gap-5 mt-10">
          <Link to={"/reviews"}>
            <Button1 className="bg-orange-500 hover:bg-orange-600 text-white">
              View All
            </Button1>
          </Link>
          {user ? (
            <Button1 className="bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center gap-1">
              <label
                htmlFor="my_modal_6"
                className="cursor-pointer flex items-center gap-2"
              >
                Add Review <IoIosAddCircleOutline />
              </label>
            </Button1>
          ) : (
            <Link to={"auth/login"}>
              <Button1 className="bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center gap-1">
                Add Review <IoIosAddCircleOutline />
              </Button1>
            </Link>
          )}
        </div>
      </div>
      <ReviewModal />
    </div>
  );
}
