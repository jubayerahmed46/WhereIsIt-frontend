/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

function ReviewCard({ review }) {
  return (
    <div className="shadow-sm rounded-lg p-4 mx-2 border dark:border-gray-600/50">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 font-bold text-blue-gray-500">
          {[...Array(review.rating)].map((rev, i) => (
            <span key={i} className="text-xl text-deep-orange-500">
              <FaStar />
            </span>
          ))}
        </div>
        <div className="text-gray-500">{review.date} </div>
      </div>
      <p className="text-gray-700 text-sm mb-6  dark:text-gray-500">
        {review.description}
      </p>
      <div className="flex items-center gap-5">
        <img
          src={review.reviewer.photo}
          className="h-12 w-12 object-cover aspect-square rounded-full"
          alt="User"
        />
        <div className="flex flex-col">
          <h3 className="font-bold text-gray-800 dark:text-white/80">
            {review.reviewer.name}
          </h3>
          <p className="text-sm text-gray-500">{review.reviewText}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
