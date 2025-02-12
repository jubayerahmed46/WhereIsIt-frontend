import { useEffect, useState } from "react";
import PostCard from "../home/PostCard";
import { Helmet } from "react-helmet-async";
import { TbGridDots } from "react-icons/tb";
import { MdTableRows } from "react-icons/md";
import { Link } from "react-router";
import Pagination from "./Pagination";
import Spinner2 from "../spinner/Spinner2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ImSortAmountDesc } from "react-icons/im";
import toast from "react-hot-toast";

function getLayout() {
  let lay = localStorage.getItem("layout");
  if (!lay) {
    lay = localStorage.setItem("layout", JSON.stringify(true));
  }
  return lay;
}

function LostAndFoundItems() {
  const [allPost, setAllPost] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [layout, setLayout] = useState(() => {
    return JSON.parse(getLayout());
  });
  const [loader, setLoader] = useState(true);
  const [noData, setNoData] = useState("");
  const instance = useAxiosPublic();
  const [isSort, setIsSort] = useState("");

  useEffect(() => {
    localStorage.setItem("layout", JSON.stringify(layout));
  }, [layout]);

  useEffect(() => {
    setNoData("");
    (async function () {
      try {
        const { data } = await instance.get(
          `/posts?searchText=${searchText}&isSort=${isSort}`
        );
        setAllPost(data);
      } catch (error) {
        setNoData(error.response?.data?.message);
      } finally {
        setLoader(false);
      }
    })();
  }, [searchText, instance, isSort]);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleOnpaginationLoadDate = (posts) => {
    setAllPost(posts);
  };

  return (
    <div className=" mx-auto max-w-7xl lg:px-9 md:px-5 px-3 md:mt-28 mt-24">
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Lost and Found Post</title>
      </Helmet>
      <div className="border-2  rounded-md p-4 mb-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Search Input */}
          <div className="w-full sm:w-1/2">
            <label className="relative block w-full">
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 ring-black/70"
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

          {/* Layout Toggle */}
          <div className="flex items-center mt-4 sm:mt-0">
            <span className="text-sm text-gray-700 mr-4">Change Layout</span>
            <button
              onClick={() => setLayout((prev) => !prev)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
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
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 ml-3"
            >
              <span>
                <ImSortAmountDesc className="text-xl" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">
          Browse All Lost and Found Posts
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Explore all items that have been reported as lost or found...
        </p>
        <hr className="mb-4" />

        {loader ? (
          <Spinner2 />
        ) : noData ? (
          <div className="text-center text-gray-700 text-xl py-12">
            {noData}
          </div>
        ) : (
          <div>
            {layout ? (
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-8">
                {allPost.map((post) => (
                  <div
                    key={post._id}
                    className="group relative  hover:shadow-sm p-4 rounded-lg  border-2 duration-300"
                  >
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b p-4">Thumbnail</th>
                      <th className="border-b p-4">Title and Desc</th>
                      <th className="border-b p-4">Location</th>
                      <th className="border-b p-4">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allPost.map((post) => (
                      <tr key={post._id} className="hover:bg-gray-50">
                        <td className="p-4">
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                        </td>
                        <td className="p-4">
                          <span className="block font-semibold">
                            {post.title.slice(0, 30)}...
                          </span>
                          <span className="text-sm text-gray-500">
                            {post.description.slice(0, 40)}
                          </span>
                        </td>
                        <td className="p-4">{post.location}</td>
                        <td className="p-4">
                          <Link to={`/posts/${post._id}`}>
                            <button className="text-indigo-600 hover:underline">
                              Details
                            </button>
                          </Link>
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
      <Pagination handleOnpaginationLoadDate={handleOnpaginationLoadDate} />
    </div>
  );
}

export default LostAndFoundItems;
