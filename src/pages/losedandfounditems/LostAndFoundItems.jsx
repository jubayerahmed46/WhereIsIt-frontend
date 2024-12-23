import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../home/PostCard";

function LostAndFoundItems() {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts`
        );
        setAllPost(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  console.log(allPost);
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900">
        Browse All Lost and Found Posts
      </h2>
      <p className="mt-1 text-sm text-gray-600">
        Explore all items that have been reported as lost or found. This section
        contains detailed posts from users who are either looking for their
        belongings or have found items they wish to return to their rightful
        owners. Browse through the list to help reunite lost items with their
        owners or report a found item to make someones day!
      </p>
      <hr className="my-4" />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-8 2xl:grid-cols-4">
        {allPost.map((post) => (
          <div key={post._id}>
            <PostCard post={post}></PostCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostAndFoundItems;
