import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import PostCard from "./PostCard";
import Button1 from "../../components/common/btns/Button1";
import Spinner from "../spinner/Spinner";
import useAxiosInstance from "../../hooks/useAxiosInstance";

export default function LatestLostAndFound() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const instance = useAxiosInstance();

  useEffect(() => {
    (async function fetchPosts() {
      try {
        const { data } = await instance.get("/posts?searchText=latest");
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err.message);
      } finally {
        setLoader(false);
      }
    })();
  }, [instance]);

  if (loader) {
    return <Spinner />;
  }

  return (
    <motion.div
      className="pt-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
        Latest Lost and Found Items
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post._id}
            className="group relative border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/lost-and-found">
          <Button1 className="text-white bg-blue-600 hover:bg-blue-700">
            See All
          </Button1>
        </Link>
      </div>
    </motion.div>
  );
}
