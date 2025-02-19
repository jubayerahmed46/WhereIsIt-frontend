import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Button1 from "../../components/common/btns/Button1";
import { Link, useNavigate } from "react-router";
import Spinner from "../spinner/Spinner";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import Spinner2 from "../spinner/Spinner2";
import SectionHeading from "../../components/SectionHeading";

function AllRecoveredPage() {
  const { user } = useAuth();
  const [recoverdPost, setRecoveredPost] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(true);
  const instance = useAxiosInstance();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      (async function () {
        try {
          const { data } = await instance.get(`/recovered?email=${user.email}`);
          setRecoveredPost(data);
        } catch (error) {
          const errorFromServer =
            error.response?.data?.message || error.message;
          setErrorMessage(errorFromServer);
        } finally {
          setLoader(false);
        }
      })();
    }
  }, [user, instance]);

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
        <SectionHeading>My Recovered Items</SectionHeading>
      </div>
      {errorMessage ? (
        <div className="grid min-h-full place-items-center bg-gray-100 dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 ">
          <div className="text-center">
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {errorMessage}
            </h1>
            <p className="mt-6 text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-xl">
              You don't have any recovered items.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-700   dark:border-gray-700/70 dark:shadow-gray-900">
              <thead className="border-b border-gray-700 dark:border-gray-700/70 dark:shadow-gray-900 md:text-base text-xs">
                <tr>
                  <th className="p-4">Thumbnail</th>
                  <th className=" p-4">Title and Desc</th>
                  <th className=" p-4">Location</th>
                </tr>
              </thead>
              <tbody>
                {recoverdPost.map((post) => (
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
                    <td className="p-4 md:text-lg  text-sm">
                      <span className="block font-semibold">
                        {post.title.slice(0, 20)}...
                      </span>
                      <span className="md:text-sm text-xs text-gray-500 ">
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
        </div>
      )}
    </div>
  );
}

export default AllRecoveredPage;
