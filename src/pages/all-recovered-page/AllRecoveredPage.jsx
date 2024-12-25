import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Button1 from "../../components/common/btns/Button1";
import { Link } from "react-router";

function AllRecoveredPage() {
  const { user } = useAuth();
  const [recoverdPost, setRecoveredPost] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user) {
      (async function () {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/recovered?email=${user.email}`,
            { withCredentials: true }
          );
          setRecoveredPost(data);
        } catch (error) {
          // console.log(error.response?.data || error.message);
          const errorFromServer =
            error.response?.data?.message || error.message;
          setErrorMessage(errorFromServer);
        }
      })();
    }
  }, [user]);

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recovered Posts</title>
      </Helmet>
      {errorMessage ? (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {errorMessage}
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              You dont have any recovered item
            </p>
          </div>
        </main>
      ) : (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description and location</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recoverdPost?.map((post, seriul) => (
              <tr key={post._id}>
                <th>{seriul + 1} </th>
                <td>
                  <h2 className="font-bold">{post.title.slice(0, 20)}...</h2>{" "}
                  <p> Date: {post.date}</p>
                </td>

                <td>
                  <h4>{post.description.slice(0, 40)} </h4>
                  <p className="text-sm text-gray-600">{post.location} </p>
                </td>
                <td>
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
