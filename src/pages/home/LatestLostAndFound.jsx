import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import Button1 from "../../components/common/btns/Button1";

export default function LatestLostAndFound() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts?latest=true`
        );
        setPosts(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return (
    <div className="bg-white">
      <div className=" py-8 ">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Latest Lost and Found Items
          </h2>
          <p className="mt-1">
            Find the latest updates on lost and found items. Whether youre
            searching for something youve lost or want to return a found item,
            this section helps you connect with others. Check here for recent
            entries!
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2  md:grid-cols-3 xl:gap-x-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="group relative border p-2 rounded-md"
            >
              <PostCard post={post}></PostCard>
            </div>
          ))}
          <Button1> See all </Button1>
        </div>
      </div>
    </div>
  );
}
