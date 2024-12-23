import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

function ManageMyPosts() {
  const [myPosts, setMyPosts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      (async function () {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/my-posts/${user.email}`
          );
          setMyPosts(data);
        } catch (error) {
          console.log(error.message);
        }
      })();
    }
  }, [user]);

  if (!myPosts.length) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            No Post Availible
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find any post
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
            <th>Name</th>
            <th>Job</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myPosts?.map((post, seriul) => (
            <tr key={post._id}>
              <th>{seriul + 1} </th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td className="flex gap-2 text-2xl">
                <span className="border-r pr-2 cursor-pointer ">
                  <FaRegEdit />
                </span>
                <span className="cursor-pointer text-red-500">
                  <RiDeleteBin2Fill />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageMyPosts;
