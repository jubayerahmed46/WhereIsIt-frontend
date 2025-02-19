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
import SectionHeading from "../../components/SectionHeading";

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
    <div className="mb-11 mt-20">
      <SectionHeading className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white/90 my-5 mt-12 ">
        What People Says About Us
      </SectionHeading>
      <div className=" px-2 shadow-sm py-5 ">
        <ReviewSlider reviews={reviews} />
        <div className="flex justify-center gap-5 mt-9">
          <Link to={"/reviews"}>
            <Button1 className="bg-[#003366] text-white">View All</Button1>
          </Link>
          {user ? (
            <Button1 className="bg-white shadow-sm text-black border flex justify-center items-center gap-1">
              <label
                htmlFor="my_modal_6"
                className="cursor-pointer flex items-center gap-2"
              >
                Add Review <IoIosAddCircleOutline />
              </label>
            </Button1>
          ) : (
            <Link to={"auth/login"}>
              <Button1 className="bg-white shadow-md flex justify-center items-center gap-1 text-black">
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
