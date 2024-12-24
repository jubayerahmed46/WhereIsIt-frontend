import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

function AllRecoveredPage() {
  const { user } = useAuth();
  const [recoverdPost, setRecoveredPost] = useState([]);

  useEffect(() => {
    if (user) {
      (async function () {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/recovered?email=${user.email}`
          );
          setRecoveredPost(data);
        } catch (error) {
          console.log(error.message);
        }
      })();
    }
  }, [user]);

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
          {recoverdPost?.map((post, seriul) => (
            <tr key={post._id}>
              <th>{seriul + 1} </th>
              <td> {post.title.slice(0, 10)}... </td>
              <td>Quality Control Specialist</td>
              <td>lksdjlfjklsd</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllRecoveredPage;
