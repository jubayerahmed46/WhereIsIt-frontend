import { Link } from "react-router";
import { PiArrowRightFill } from "react-icons/pi";

/* eslint-disable react/prop-types */
function PostCard({ post }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="">
        <div className=" object-contain w-full rounded-sm  flex justify-center items-center">
          <img
            alt={post.title}
            src={post.thumbnail}
            className="object-cover w-full rounded-md h-48  border"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-xl font-bold capitalize ">
              <p className="text-lg">
                {post.title.split(" ")[0]} {post.title.split(" ")[1]},{" "}
                {post.title.split(" ")[2]}...
              </p>
            </h3>

            <p className="my-2 opacity-70 text-sm capitalize">
              {post.description.slice(0, 70)}...
            </p>
            <p className="text-xs text-right opacity-60">{post.date} </p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <Link to={`/postsDetails/${post._id}`}>
          <button
            className={
              "mt-1 bg-transparent text-sm font-semibold   flex items-center gap-1 text-[#003366]   transition-all duration-200"
            }
          >
            View More <PiArrowRightFill />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
