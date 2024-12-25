import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import Button1 from "../../components/common/btns/Button1";
import { Link } from "react-router";
import Spinner from "../spinner/Spinner";

export default function LatestLostAndFound() {
  const [posts, setPosts] = useState([]);
  const [loader, setLader] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts?searchText=latest`
        );
        setPosts(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLader(false);
      }
    })();
  }, []);

  if (loader) {
    return <Spinner />;
  }

  return (
    <div className="pt-8 ">
      <div className="container mx-auto py-8">
        <div>
          <h2 className="text-3xl  tracking-tight text-gray-900 font-bold">
            Latest Lost and Found Items
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="group relative border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/lost-and-found">
            <Button1 className="text-white bg-blue-600 hover:bg-blue-700">
              See All
            </Button1>
          </Link>
        </div>
      </div>
    </div>
  );
}
