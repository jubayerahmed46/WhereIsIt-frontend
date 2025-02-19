import { useState } from "react";
import { Rating } from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import Button1 from "../../components/common/btns/Button1";

export default function ReviewModal() {
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box dark:bg-[#101010] dark:text-white rounded-md">
          <div className="modal-action flex justify-start">
            <label
              htmlFor="my_modal_6"
              className="bg-[#003366] text-white/85 shadow-md cursor-pointer py-2 rounded-sm  font-semibold   px-3"
            >
              Back
            </label>
          </div>
          <ModalBox />
        </div>
      </div>
    </div>
  );
}
function ModalBox() {
  const [rated, setRated] = useState(0);
  const [review, setReview] = useState("");
  const { user } = useAuth();
  const instance = useAxiosInstance();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      reviewer: {
        name: user.displayName,
        photo: user.photoURL,
      },
      description: review,
      reviewText: review.length > 15 ? "Grand User" : "Normal User",
      date: new Date().toLocaleDateString(),
      rating: rated,
    };

    await instance.post(`/reviews`, reviewData);
    toast.success("Thank You for your Reviews");
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl/9 font-bold tracking-tight dark:text-white/90">
            Post Your Review
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mt-5 flex justify-center ">
                <Rating value={rated} onChange={(value) => setRated(value)} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="review"
                  className="block text-sm font-medium  dark:text-white/85"
                >
                  Write here
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="review"
                  name="review"
                  cols={10}
                  rows={5}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                  className="border border-black w-full rounded-md outline-none dark:bg-black/65 p-4 dark:text-gray-400 dark:focus:ring-1 dark:ring-white/20 focus:ring-1 ring-black/65"
                ></textarea>
              </div>
            </div>

            <div>
              {review ? (
                <Button1 className="w-full bg-[#003366] mt-4 text-white">
                  Submit
                </Button1>
              ) : (
                <Button1 className="mt-4 text-white w-full bg-[#003366] ">
                  Submit
                </Button1>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
