import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"; // Correct import for useParams
import Button1 from "../../components/common/btns/Button1";
import RecoveredForm from "./RecoveredForm";
import { Helmet } from "react-helmet-async";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { Spinner } from "@material-tailwind/react";

export default function PostDetails() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const [recovered, setRecovered] = useState(false);
  const instance = useAxiosInstance();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  const handleRecover = () => {
    setRecovered(true);
  };

  useEffect(() => {
    (async function () {
      try {
        const { data } = await instance.get(`/posts/${id}`);
        setPost(data);
      } finally {
        setLoader(false);
      }
    })();
  }, [id, recovered, instance]);

  if (loader) {
    return <Spinner />;
  }

  return (
    <div className="bg-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Post Details | {post.title}</title>
      </Helmet>
      <div className="pt-6">
        <Button1 onClick={() => navigate(-1)} className={"mb-4"}>
          Back
        </Button1>
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <span
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {post.name}
              </span>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 w-full">
            <img
              alt={post.title}
              src={post.thumbnail}
              className="rounded-lg object-cover w-full md:h-[400px] h-64"
            />
          </div>
          <div className="mt-10 lg:col-span-2 lg:mt-0">
            <div className="md:p-32 text-nowrap border">
              {post.status === "recovered" ? (
                <Button1 className="bg-gray-300 hover:bg-gray-300 text-black h-auto">
                  Recovered
                </Button1>
              ) : (
                <label
                  htmlFor="my_modal_6"
                  className="h-auto relative overflow-hidden bg-blue-600 text-white px-6 py-2 rounded-md text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 cursor-pointer"
                >
                  {post?.postType?.toLowerCase() === "found"
                    ? "This is Mine"
                    : "Found This!"}
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Post info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {post.title}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h3 className="text-sm font-medium text-gray-900">Details</h3>
            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-900">
                Category: {post.category}
              </p>
              <p className="text-base text-gray-900">
                Location: {post.location}
              </p>
              <p className="text-base text-gray-900">
                Reported by: {post.name}
              </p>
              <p className="text-base text-gray-900">Email: {post.email}</p>
              <p className="text-base text-gray-900">
                Date: {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <h3 className="text-lg font-medium text-gray-900">Description</h3>
            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-900">{post.description}</p>
            </div>
          </div>
        </div>
      </div>
      <RecoveredForm
        itemName={post.title}
        id={post._id}
        handleRecover={handleRecover}
      />
    </div>
  );
}
