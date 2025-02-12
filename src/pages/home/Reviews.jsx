import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button1 from "../../components/common/btns/Button1";
import { IoIosAddCircleOutline } from "react-icons/io";
import ReviewSlider from "./ReviewSlider";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import ReviewModal from "./ReviewModal";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Spinner2 from "../spinner/Spinner2";
import { useQuery } from "@tanstack/react-query";

export default function Reviews() {
  const { user } = useAuth();
  const instance = useAxiosPublic();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await instance.get("/reviews");
      return data;
    },
  });

  if (isLoading) {
    return <Spinner2 />;
  }

  return (
    <div className="mb-11">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white/90 my-5 mt-12 ">
        Our Reviews
      </h2>
      <div className="border rounded-md px-2 shadow-sm py-5  dark:border-gray-600">
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
