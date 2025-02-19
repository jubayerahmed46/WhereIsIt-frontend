import { motion } from "framer-motion";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Spinner2 from "../spinner/Spinner2";
import SectionHeading from "../../components/SectionHeading";

export default function LatestLostAndFound() {
  const instance = useAxiosPublic();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["latestPosts"],
    queryFn: async () => {
      const { data } = await instance.get("/posts?searchText=latest");
      return data;
    },
  });

  if (isLoading) {
    return <Spinner2 />;
  }

  return (
    <motion.div
      className=""
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
      <SectionHeading>Latest Found & Lost Posts</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      <div className=" mt-10">
        <Link to="/lost-and-found">
          <button
            className={`py-2 px-3  text-white rounded-md hover:bg-black transition-all duration-300 
          bg-[#003366] `}
          >
            Find Out More
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
