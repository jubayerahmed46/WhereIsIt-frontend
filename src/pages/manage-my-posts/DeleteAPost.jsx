/* eslint-disable react/prop-types */
import { RiDeleteBin2Fill } from "react-icons/ri";

function DeleteAPost({ deleteHandler, id }) {
  return (
    <button
      onClick={() => deleteHandler(id)}
      className="cursor-pointer text-red-500"
    >
      <RiDeleteBin2Fill />
    </button>
  );
}

export default DeleteAPost;
