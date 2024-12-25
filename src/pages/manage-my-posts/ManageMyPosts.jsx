import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DeleteAPost from "./DeleteAPost";
import { RiEditBoxLine } from "react-icons/ri";
import { Link } from "react-router";

function ManageMyPosts() {
  const [myPosts, setMyPosts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      (async function () {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/my-posts/${user.email}`,
            { withCredentials: true }
          );
          setMyPosts(data);
        } catch (error) {
          console.log(error.message);
        }
      })();
    }
  }, [user]);

  const deleteHandler = async (id) => {
    const ask = confirm("are you sure to delete?");
    if (ask) {
      try {
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/delete/${id}`,
          { params: { email: user.email }, withCredentials: true }
        );
        if (data?.deletedCount) {
          alert("post deleted");
          const filteredPosts = myPosts.filter((post) => post._id !== id);
          setMyPosts(filteredPosts);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!myPosts.length) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            No Post Availible
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            we couldn’t find any post
          </p>
        </div>
      </main>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Desctiption & location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myPosts?.map((post, seriul) => (
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
              <td className="flex gap-2 text-2xl ">
                <Link to={`/manage-my-posts/${post._id}`}>
                  <button className="mt-3">
                    <RiEditBoxLine />
                  </button>
                </Link>
                <DeleteAPost deleteHandler={deleteHandler} id={post._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageMyPosts;
