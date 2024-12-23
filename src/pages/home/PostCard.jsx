import Button1 from "../../components/common/btns/Button1";
import { Link } from "react-router";

/* eslint-disable react/prop-types */
function PostCard({ post }) {
  console.log(post);
  return (
    <>
      <img
        alt={post.title}
        src={post.thumbnail}
        className="object-cover w-full rounded-md bg-gray-200  lg:h-44 h-36"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <p className="text-xl">{post.title}</p>
            <p>{post.description.slice(0, 40)}</p>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{post.location}</p>
        </div>
      </div>
      <Link to={`/posts/${post._id}`}>
        <Button1 className={"mt-4"}>View Details</Button1>
      </Link>
    </>
  );
}

export default PostCard;
