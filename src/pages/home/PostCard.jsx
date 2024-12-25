import Button1 from "../../components/common/btns/Button1";
import { Link } from "react-router";

/* eslint-disable react/prop-types */
function PostCard({ post }) {
  return (
    <>
      <div className=" object-contain w-full rounded-md bg-gray-200  lg:h-60 xl:h-80 sm:h-52 h-60 flex justify-center items-center">
        <img
          alt={post.title}
          src={post.thumbnail}
          className="object-cover w-full rounded-md h-4/6"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <p className="text-lg">
              {post.title.split(" ")[0]} {post.title.split(" ")[1]},{" "}
              {post.title.split(" ")[2]}...
            </p>
            <p className="my-2">{post.description.slice(0, 70)}...</p>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Location: {post.location}
          </p>
        </div>
      </div>
      <Link to={`/posts/${post._id}`}>
        <Button1
          className={
            "mt-4 bg-transparent text-black ring-1 hover:text-white transition-all duration-200"
          }
        >
          View Details
        </Button1>
      </Link>
    </>
  );
}

export default PostCard;
