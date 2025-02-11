import Button1 from "../../components/common/btns/Button1";
import { Link } from "react-router";

/* eslint-disable react/prop-types */
function PostCard({ post }) {
  return (
    <>
      <div className=" object-contain w-full rounded-md  flex justify-center items-center">
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
          <p className="my-2">{post.description.slice(0, 70)}...</p>
          <p className="mt-1 text-sm text-gray-500">{post.location}</p>
        </div>
      </div>
      <Link to={`/postsDetails/${post._id}`}>
        <Button1
          className={
            "mt-4 bg-transparent text-black ring-1 hover:text-white transition-all duration-200"
          }
        >
          View More
        </Button1>
      </Link>
    </>
  );
}

export default PostCard;
