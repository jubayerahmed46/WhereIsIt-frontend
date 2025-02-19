import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Helmet } from "react-helmet-async";

import Button1 from "../../components/common/btns/Button1";
import RecoveredForm from "./RecoveredForm";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import Spinner from "../spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

export default function PostDetails() {
  const { id } = useParams();
  const instance = useAxiosInstance();
  const { user } = useAuth();

  // const [post, setPost] = useState({});
  // const [recovered, setRecovered] = useState(false);
  // const [loading, setLoading] = useState(true);

  const {
    data: post = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-posts"],
    queryFn: async () => {
      const { data } = await instance.get(`/posts/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="dark:text-white mx-auto max-w-7xl lg:px-9 md:px-5 px-3 md:my-24 my-24">
      <Helmet>
        <title>Post Details | {post.title || "Loading..."}</title>
      </Helmet>

      <div className="pt-6">
        {/* Post Details */}
        <div className="mx-auto mt-6 flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              alt={post.title}
              src={post.thumbnail}
              className="rounded-lg object-cover w-full md:h-[400px] h-64"
            />
            <h1 className="text-2xl font-bold tracking-tight dark:text-white/95 sm:text-3xl mt-8">
              {post.title}
            </h1>
            <p className="text-base  mt-2 text-gray-500">{post.description}</p>
          </div>

          {/* Information Section */}
          <div className="md:w-1/2">
            <table className=" border w-full  border-collapse   dark:border-gray-700/70  border-black/20">
              <tr className="border-b   dark:border-gray-700/70  border-black/20 ">
                <th className="border-black/20 text-left w-28 border-r border-white  p-2 py-2   dark:border-gray-700/70 ">
                  Category
                </th>
                <td className="text-left  pl-3 ">{post.category}</td>
              </tr>
              <tr className="border-b   dark:border-gray-700/70  dark:bg-white/5 bg-gray-100 border-black/20 ">
                <th className="border-black/20 text-left w-28 border-r border-white  p-2   dark:border-gray-700/70 py-2">
                  Location
                </th>
                <td className="text-left  pl-3">{post.location}</td>
              </tr>
              <tr className="border-b   dark:border-gray-700/70   border-black/20 ">
                <th className="text-left w-28 border-r border-white  p-2   dark:border-gray-700/70  border-black/20 py-2">
                  Reported by
                </th>
                <td className="text-left  pl-3">{post.name}</td>
              </tr>
              <tr className="border-b   dark:border-gray-700/70  bg-gray-100  border-black/20 dark:bg-white/5">
                <th className="text-left w-28 border-r border-white  p-2   dark:border-gray-700/70  border-black/20 py-2">
                  Email
                </th>
                <td className="text-left  pl-3">{post.email}</td>
              </tr>
              <tr className="border-b   dark:border-gray-700/70  border-black/20">
                <th className="text-left w-28 border-r border-white  p-2   dark:border-gray-700/70  border-black/20 py-2">
                  Date
                </th>
                <td className="text-left  pl-3">{post.category}</td>
              </tr>
              {user.email !== post.email && (
                <tr className="border-b   dark:border-gray-700/70   border-black/20">
                  <td colSpan={2}>
                    <div className="py-2 w-full my-1 flex   justify-center">
                      {post.status === "recovered" ? (
                        <Button1 className="bg-blue-gray-800 text-white hover:bg-gray-800  ">
                          Recovered
                        </Button1>
                      ) : (
                        <label
                          htmlFor="my_modal_6"
                          className="cursor-pointer mx-auto py-2 px-3 rounded-md  transition-all duration-300  bg-[#003366] text-white hover:bg-[#1a4979]"
                        >
                          {post?.postType?.toLowerCase() === "found"
                            ? "This is Mine"
                            : "Found This!"}
                        </label>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </div>

      {/* Recovered Form */}
      <RecoveredForm itemName={post.title} id={post._id} refetch={refetch} />
    </div>
  );
}
