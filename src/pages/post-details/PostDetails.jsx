import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Helmet } from "react-helmet-async";

import Button1 from "../../components/common/btns/Button1";
import RecoveredForm from "./RecoveredForm";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import Spinner from "../spinner/Spinner";

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const instance = useAxiosInstance();

  const [post, setPost] = useState({});
  const [recovered, setRecovered] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch Post Details
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await instance.get(`/posts/${id}`);
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, recovered, instance]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="dark:text-white mx-auto max-w-7xl lg:px-9 md:px-5 px-3 md:my-24 my-24">
      <Helmet>
        <title>Post Details | {post.title || "Loading..."}</title>
      </Helmet>

      {/* Back Button */}
      <div className="pt-6">
        <Button1 onClick={() => navigate(-1)} className="mb-4">
          Back
        </Button1>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li className="text-sm font-medium text-gray-500 hover:text-gray-600">
              {post.name}
            </li>
          </ol>
        </nav>

        {/* Post Details */}
        <div className="mx-auto mt-6 flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              alt={post.title}
              src={post.thumbnail}
              className="rounded-lg object-cover w-full md:h-[400px] h-64"
            />
          </div>

          {/* Information Section */}
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold tracking-tight dark:text-white/95 sm:text-3xl">
              {post.title}
            </h1>
            <p className="text-base dark:text-white/95">{post.description}</p>

            {/* Post Meta Info */}
            <div className="mt-4 space-y-3">
              <p className="text-base dark:text-white/95">
                <strong>Category:</strong> {post.category}
              </p>
              <p className="text-base dark:text-white/95">
                <strong>Location:</strong> {post.location}
              </p>
              <p className="text-base dark:text-white/95">
                <strong>Reported by:</strong> {post.name}
              </p>
              <p className="text-base dark:text-white/95">
                <strong>Email:</strong> {post.email}
              </p>
              <p className="text-base dark:text-white/95">
                <strong>Date:</strong>{" "}
                {post.date ? new Date(post.date).toLocaleDateString() : "N/A"}
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-4">
              {post.status === "recovered" ? (
                <Button1 className="bg-blue-gray-800 text-white hover:bg-gray-800 h-auto">
                  Recovered
                </Button1>
              ) : (
                <label
                  htmlFor="my_modal_6"
                  className="h-auto bg-blue-600 text-white px-6 py-2 rounded-md text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 cursor-pointer"
                >
                  {post?.postType?.toLowerCase() === "found"
                    ? "This is Mine"
                    : "Found This!"}
                </label>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recovered Form */}
      <RecoveredForm
        itemName={post.title}
        id={post._id}
        handleRecover={() => setRecovered(true)}
      />
    </div>
  );
}
