import { useState } from "react";
import { Rating } from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

export default function ReviewModal() {
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <ModalBox />
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
function ModalBox() {
  const [rated, setRated] = useState(0);
  const [review, setReview] = useState("");
  const { user } = useAuth();

  const handleSubmit = (e) => {
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
    console.log(reviewData);

    (async function () {
      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/reviews`,
          reviewData,
          {
            withCredentials: true,
          }
        );
        toast.success("Thank You for your Reviews");
      } catch (error) {
        console.log(error.message);
      }
    })();
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Post Your Review
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="rating"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Rating
              </label>
              <div className="mt-2">
                <Rating value={rated} onChange={(value) => setRated(value)} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="review"
                  className="block text-sm/6 font-medium text-gray-900"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
            </div>

            <div>
              {review ? (
                <button className="w-full">
                  <label
                    className="cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    htmlFor="my_modal_6"
                  >
                    Submit
                  </label>
                </button>
              ) : (
                <button className="cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
