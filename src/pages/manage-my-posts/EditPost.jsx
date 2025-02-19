import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Button1 from "../../components/common/btns/Button1";
import { useNavigate, useParams } from "react-router";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import Spinner from "../spinner/Spinner";

const categories = [
  "Pets",
  "Documents",
  "Gadgets",
  "Clothing",
  "Jewelry",
  "Wallets",
  "Keys",
  "Bags",
  "Mobile Phones",
  "Laptops",
  "Tablets",
  "Cameras",
  "Books",
  "Glasses",
  "Headphones",
  "ID Cards",
  "Passports",
  "Toys",
  "Bicycles",
  "Umbrellas",
  "Handbags",
  "Shoes",
  "Electronics",
  "Furniture",
  "Cash",
  "Documents (Legal)",
  "Musical Instruments",
  "Artworks",
  "Sports Equipment",
  "Tools",
  "Chargers",
  "Pillows",
];

function EditPost() {
  const { register, handleSubmit } = useForm();
  const [post, setPost] = useState(null);
  const [LostOrFoundDate, setLostOrFoundDate] = useState(() => {
    return post?.data || new Date();
  });
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const instance = useAxiosInstance();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await instance.get(`/posts/${id}`);
        setPost(data);
      } finally {
        setLoader(false);
      }
    })();
  }, [id, instance]);

  const handleUpdatePost = (data) => {
    data.date = LostOrFoundDate.toISOString().slice(0, 10);
    (async function () {
      setLoader(true);
      try {
        await instance.patch(`/my-posts/update/${id}`, data);
        navigate("/manage-my-posts");
      } finally {
        setLoader(false);
      }
    })();
  };

  if (loader) {
    return <Spinner />;
  }

  return (
    <div className="isolate  px-6  py-10 lg:px-8">
      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Edit Post
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 mb-7">
            Update details of your {post.postType} item.
          </p>
          <form
            onSubmit={handleSubmit(handleUpdatePost)}
            className="space-y-6 w-full bg-[#00336618] dark:bg-gray-900/50 p-6 rounded-md shadow-md  text-left"
          >
            {/* Title */}
            <div className="sm:col-span-6">
              <label htmlFor="title" className="block text-sm font-medium ">
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  {...register("title")}
                  type="text"
                  defaultValue={post.title}
                  placeholder="Enter the title of the item"
                  className="w-full border  dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none  "
                />
              </div>
            </div>

            {/* Post Type */}
            <div className="sm:col-span-3">
              <label htmlFor="post-type" className="block text-sm font-medium ">
                Post Type
              </label>
              <div className="mt-2">
                <select
                  {...register("postType")}
                  id="post-type"
                  defaultValue={post?.postType}
                  className="w-full border  dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none  "
                >
                  <option disabled>Select Post Type</option>
                  <option value="lost">Lost</option>
                  <option value="found">Found</option>
                </select>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="sm:col-span-3">
              <label htmlFor="thumbnail" className="block text-sm font-medium ">
                Thumbnail (Image)
              </label>
              <div className="mt-2">
                <input
                  id="thumbnail"
                  {...register("thumbnail")}
                  type="text"
                  defaultValue={post?.thumbnail}
                  placeholder="Image URL"
                  className="w-full border  dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none  "
                />
              </div>
            </div>

            {/* Description */}
            <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium "
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  {...register("description")}
                  rows="4"
                  defaultValue={post.description}
                  placeholder="Provide a detailed description of the item"
                  className="w-full border  dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none  "
                />
              </div>
            </div>

            {/* Category */}
            <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-sm font-medium ">
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  defaultValue={post.category}
                  {...register("category")}
                  className="w-full border  dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none  "
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {categories.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="sm:col-span-6">
              <label htmlFor="location" className="block text-sm font-medium ">
                Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  {...register("location")}
                  defaultValue={post.location}
                  type="text"
                  placeholder="Enter the location"
                  className="w-full border  dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none  "
                />
              </div>
            </div>

            {/* Date Lost */}
            <div className="sm:col-span-3">
              <label htmlFor="date-lost" className="block text-sm font-medium ">
                Date Lost/Found
              </label>
              <div className="mt-2">
                <DatePicker
                  selected={LostOrFoundDate}
                  onChange={(date) => setLostOrFoundDate(date)}
                  className="w-full border  dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none  "
                />
              </div>
            </div>

            <div className="mt-10 sm:col-span-6">
              <Button1 className="w-full bg-[#003366] text-white hover:bg-[#1a4979]">
                Update Post
              </Button1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
