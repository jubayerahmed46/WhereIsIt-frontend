import DeleteAPost from "./DeleteAPost";
import { RiEditBoxLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import Spinner2 from "../spinner/Spinner2";
import SectionHeading from "../../components/SectionHeading";

function ManageMyPosts() {
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const instance = useAxiosInstance();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      (async function () {
        try {
          const { data } = await instance.get(`/my-posts/${user.email}`);
          setMyPosts(data);
        } catch (error) {
          return;
        } finally {
          setLoader(false);
        }
      })();
    }
  }, [user, instance]);

  const deleteHandler = async (id) => {
    const deleting = async () => {
      try {
        const { data } = await instance.delete(`/delete/${id}`, {
          params: { email: user.email },
        });
        if (data?.deletedCount) {
          const filteredPosts = myPosts.filter((post) => post._id !== id);
          setMyPosts(filteredPosts);
        }
      } catch (error) {
        return;
      }
    };

    const handleConfirm = (t) => {
      toast.dismiss(t.id);
      toast.promise(deleting(), {
        loading: "Processing...",
        success: <b>Post Deleted Successfull</b>,
        error: <b>opps, deteling failed.</b>,
      });
    };

    toast((t) => (
      <span>
        Are You <b>Sure</b>?
        <button
          className="bg-orange-300 p-1 rounded-md text-white m-1"
          onClick={() => toast.dismiss(t.id)}
        >
          no
        </button>
        <button
          className="bg-green-400 p-1 rounded-md text-white m-2"
          onClick={() => handleConfirm(t)}
        >
          yes
        </button>
      </span>
    ));
  };

  if (loader) {
    return <Spinner2 />;
  }

  return (
    <div className="overflow-x-auto dark:text-white/90 max-w-7xl mx-auto  lg:px-9 md:px-5 px-3 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recovered Posts</title>
      </Helmet>
      <div>
        <SectionHeading>My Posted Items</SectionHeading>
      </div>
      {!myPosts.length ? (
        <div className="grid min-h-full place-items-center bg-gray-100 dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 ">
          <div className="text-center">
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              No Item Found
            </h1>
            <p className="mt-6 text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-xl">
              You don't have any Posted items.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-700   dark:border-gray-700/70 dark:shadow-gray-900 ">
              <thead className=" border-b border-gray-700 dark:border-gray-700/70 dark:shadow-gray-900 md:text-base text-xs">
                <tr>
                  <th className="p-4">Thumbnail</th>
                  <th className=" p-4">Title and Desc</th>
                  <th className=" p-4">Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myPosts.map((post) => (
                  <tr
                    key={post._id}
                    className=" border-gray-500 border-b dark:border-gray-700/70 dark:shadow-gray-900"
                  >
                    <td className="p-4">
                      <img
                        onClick={() => navigate(`/postsDetails/${post._id}`)}
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover cursor-pointer"
                      />
                    </td>
                    <td
                      className="p-4 md:text-lg  text-sm cursor-pointer"
                      onClick={() => navigate(`/postsDetails/${post._id}`)}
                    >
                      <span className="block font-semibold hover:underline">
                        {post.title.slice(0, 20)}...
                      </span>
                      <span className="md:text-sm text-xs text-gray-500 ">
                        {post.description.slice(0, 40)}
                      </span>
                    </td>
                    <td className="p-4 md:text-sm text-[9px] md:text-left text-center">
                      {post.location}
                    </td>
                    <td>
                      <div className="flex gap-3 items-center text-2xl">
                        <div>
                          <Link to={`/manage-my-posts/${post._id}`}>
                            <button>
                              <RiEditBoxLine />
                            </button>
                          </Link>
                        </div>
                        <div>
                          <DeleteAPost
                            deleteHandler={deleteHandler}
                            id={post._id}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageMyPosts;
