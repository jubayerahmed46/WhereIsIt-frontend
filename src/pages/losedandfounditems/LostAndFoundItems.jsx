import { useState } from "react";
import PostCard from "../home/PostCard";
import { Helmet } from "react-helmet-async";
import { TbGridDots } from "react-icons/tb";
import { MdTableRows } from "react-icons/md";
import { useNavigate } from "react-router";
import Pagination from "./Pagination";
import Spinner2 from "../spinner/Spinner2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ImSortAmountDesc } from "react-icons/im";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

function getLayout() {
  let lay = localStorage.getItem("layout");
  if (!lay) {
    lay = localStorage.setItem("layout", JSON.stringify(true));
  }
  return lay;
}

function LostAndFoundItems() {
  const [searchText, setSearchText] = useState("");
  const [layout, setLayout] = useState(() => {
    return JSON.parse(getLayout());
  });
  const [isSort, setIsSort] = useState("");
  // const [currentPage, setCurrentPage] = useState(0);
  // const postPerPage = 8;
  const instance = useAxiosPublic();
  const navigate = useNavigate();

  const { data: postsData, isLoading } = useQuery({
    // queryKey: ["allPosts", currentPage, searchText, isSort],
    queryKey: ["allPosts", isSort],
    // enabled: [isSort],
    queryFn: async () => {
      const { data } = await instance.get(`/posts?isSort=${isSort}`);
      return data;
    },
  });

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="mx-auto max-w-7xl lg:px-9 md:px-5 px-3 dark:text-white/90 mb-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Lost and Found Post</title>
      </Helmet>
      <div className="border-2 rounded-md p-4 mb-8 dark:border-gray-700/70 dark:shadow-gray-900">
        <div className="flex md:gap-14 gap-4 justify-between items-center">
          <div className="w-full">
            <label className="relative block w-full">
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
                className="dark:bg-transparent w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 ring-black/70 dark:focus:ring-blue-gray-600 border dark:border-gray-700/70 dark:shadow-gray-900"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-4 md:block hidden text-nowrap">
              Change Layout
            </span>
            <button
              onClick={() => setLayout((prev) => !prev)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-transparent dark:border dark:border-gray-700/70 dark:shadow-gray-900"
            >
              {layout ? (
                <MdTableRows className="text-xl" />
              ) : (
                <TbGridDots className="text-xl" />
              )}
            </button>
            <button
              onClick={() => {
                setIsSort(true);
                toast("Sorted By Latest Items");
              }}
              title="Sort Latest Items"
              className="gap-1 flex p-2 rounded-lg bg-gray-100 hover:bg-gray-200 ml-3 dark:bg-transparent dark:border dark:border-gray-700/70 dark:shadow-gray-900"
            >
              <span className="font-bold">Sort</span>
              <span className="text-nowrap md:block hidden">by date</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 dark:text-white/90">
          Browse All Lost and Found Posts
        </h2>
        <p className="text-sm text-gray-500 mb-7">
          Explore all items that have been reported as lost or found
        </p>
        {isLoading ? (
          <Spinner2 />
        ) : postsData?.length === 0 ? (
          <div className="text-center text-gray-700 text-xl py-12">
            No data found
          </div>
        ) : (
          <div>
            {layout ? (
              <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-6 mt-8">
                {postsData?.map((post) => (
                  <div key={post._id}>
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-700 dark:border-gray-700/70 dark:shadow-gray-900">
                  <thead className="border-b border-gray-700 dark:border-gray-700/70 dark:shadow-gray-900 md:text-base text-xs">
                    <tr>
                      <th className="p-4">Thumbnail</th>
                      <th className="p-4">Title and Desc</th>
                      <th className="p-4">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {postsData?.map((post) => (
                      <tr
                        onClick={() => navigate(`/postsDetails/${post._id}`)}
                        key={post._id}
                        className="cursor-pointer border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/20 border-b dark:border-gray-700/70 dark:shadow-gray-900"
                      >
                        <td className="p-4">
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                        </td>
                        <td className="p-4 md:text-lg text-sm">
                          <span className="block font-semibold">
                            {post.title.slice(0, 20)}...
                          </span>
                          <span className="md:text-sm text-xs text-gray-500">
                            {post.description.slice(0, 40)}
                          </span>
                        </td>
                        <td className="p-4 md:text-sm text-[9px] md:text-left text-center">
                          {post.location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
      {/* <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPost={postsData?.total || 0}
        postPerPage={postPerPage}
      /> */}
    </div>
  );
}

export default LostAndFoundItems;
