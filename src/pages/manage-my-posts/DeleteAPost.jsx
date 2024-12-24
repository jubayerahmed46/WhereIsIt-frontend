/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import { RiDeleteBin2Fill } from "react-icons/ri";

function DeleteAPost({ deleteHandler, id }) {
  return (
    <button
      onClick={() => deleteHandler(id)}
      className="cursor-pointer text-red-500"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage My Posts</title>
      </Helmet>
      <RiDeleteBin2Fill />
    </button>
  );
}

export default DeleteAPost;
