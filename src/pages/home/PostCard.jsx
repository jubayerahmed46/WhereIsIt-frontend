import { Link, useNavigate } from "react-router";
import { PiArrowRightFill } from "react-icons/pi";

/* eslint-disable react/prop-types */
function PostCard({ post }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between h-full  p-4 border shadow-sm hover:shadow-md transition-all duration-300 dark:border-gray-700/70 dark:shadow-gray-900 rounded-md">
      <div className="">
        <div className=" object-contain w-full rounded-sm  flex justify-center items-center relative">
          <img
            alt={post.title}
            src={post.thumbnail}
            className={`object-cover w-full rounded-md h-48 border border-gray-500/20 dark:brightness-75 relative`}
          />
          <p className="text-xs text-right  rounded-tl-md absolute bottom-0 right-0 bg-black/80  text-white/80 py-1 px-2">
            {post.date}{" "}
          </p>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3
              className="text-xl font-bold capitalize  hover:underline cursor-pointer "
              onClick={() => navigate(`/postsDetails/${post._id}`)}
            >
              <p className="text-lg dark:text-white/90 ">
                {post.title.split(" ")[0]} {post.title.split(" ")[1]},{" "}
                {post.title.split(" ")[2]}...
              </p>
            </h3>

            <p className="my-2 opacity-70 text-sm capitalize  dark:text-gray-400">
              {post.description.slice(0, 70)}...
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <Link to={`/postsDetails/${post._id}`}>
          <button
            className={
              "mt-1 bg-transparent text-sm font-semibold   flex items-center gap-1 text-[#003366] dark:text-white/80   transition-all duration-200"
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
