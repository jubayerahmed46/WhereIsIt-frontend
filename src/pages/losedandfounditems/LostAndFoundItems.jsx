import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../home/PostCard";
import { Helmet } from "react-helmet-async";
import { TbGridDots } from "react-icons/tb";
import { MdTableRows } from "react-icons/md";
import { Link } from "react-router";

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

  useEffect(() => {
    localStorage.setItem("layout", JSON.stringify(layout));
  }, [layout]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts?searchText=${searchText}`
        );
        setAllPost(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [searchText]);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>All Lost and Found Post</title>
        </Helmet>
        <div className="flex justify-between items-center my-9">
          <h2>Change layout</h2>
          <div className=" flex gap-3 text-3xl ">
            <button
              onClick={() => setLayout((prev) => !prev)}
              className="cursor-pointer"
            >
              {layout ? <MdTableRows /> : <TbGridDots />}
            </button>
          </div>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2 mb-5">
            <input
              type="text"
              className="grow"
              name="search"
              placeholder="Search"
              value={searchText}
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          Browse All Lost and Found Posts
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Explore all items that have been reported as lost or found. This
          section contains detailed posts from users who are either looking for
          their belongings or have found items they wish to return to their
          rightful owners. Browse through the list to help reunite lost items
          with their owners or report a found item to make someones day!
        </p>
        <hr className="my-4" />
        {layout ? (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-8 2xl:grid-cols-4">
            {allPost.map((post) => (
              <div key={post._id}>
                <PostCard post={post}></PostCard>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Thumbnail</th>
                    <th>Title and Decs</th>
                    <th>locaiton</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allPost.map((post) => (
                    <tr key={post._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="">
                            <div className="mask  w-32">
                              <img
                                src={post.thumbnail}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {post.title.slice(0, 30)}...
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          {post.description.slice(0, 40)}
                        </span>
                      </td>
                      <td>{post.location} </td>
                      <th>
                        <Link to={`/posts/${post._id}`}>
                          <button className="btn btn-ghost btn-xs">
                            details
                          </button>
                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LostAndFoundItems;
