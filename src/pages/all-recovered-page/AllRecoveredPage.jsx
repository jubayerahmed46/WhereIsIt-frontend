import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Button1 from "../../components/common/btns/Button1";
import { Link } from "react-router";
import Spinner from "../spinner/Spinner";
import useAxiosInstance from "../../hooks/useAxiosInstance";

function AllRecoveredPage() {
  const { user } = useAuth();
  const [recoverdPost, setRecoveredPost] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(true);
  const instance = useAxiosInstance();

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
    return <Spinner />;
  }

  return (
    <div className="overflow-x-auto md:mt-28 mt-24 text-gray-900 dark:text-white max-w-7xl mx-auto p-3">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recovered Posts</title>
      </Helmet>
      {errorMessage ? (
        <main className="grid min-h-full place-items-center bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {errorMessage}
            </h1>
            <p className="mt-6 text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-xl">
              d You don't have any recovered items.
            </p>
          </div>
        </main>
      ) : (
        <table className="table w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md rounded-lg">
          {/* head */}
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description and Location</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {recoverdPost?.map((post, serial) => (
              <tr key={post._id} className="border-b dark:border-gray-700">
                <td className="px-4 py-2">{serial + 1}</td>
                <td className="px-4 py-2">
                  <h2 className="font-bold">{post.title.slice(0, 20)}...</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Date: {post.date}
                  </p>
                </td>
                <td className="px-4 py-2">
                  <h4>{post.description.slice(0, 40)}...</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {post.location}
                  </p>
                </td>
                <td className="px-4 py-2">
                  <Link to={`/posts/${post._id}`}>
                    <Button1 className={"text-white"}>Details</Button1>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AllRecoveredPage;
