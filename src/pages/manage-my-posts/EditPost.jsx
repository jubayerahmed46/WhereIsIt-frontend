/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Button1 from "../../components/common/btns/Button1";
import { IoCloseSharp } from "react-icons/io5";

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

function EditPost({ post }) {
  console.log(new Date(post?.date));
  const { register, handleSubmit, reset } = useForm();
  const [LostOrFoundDate, setLostOrFoundDate] = useState(new Date(post?.date));
  const { user } = useAuth();

  const handleUpdatePost = async (formData) => {
    formData.date = LostOrFoundDate.toISOString().slice(0, 10);
    console.log("Updated Data:", formData);

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/posts/${post.postId}`,
        formData
      );
      reset();
      alert("Post Updated Successfully!");
    } catch (error) {
      console.error("Failed to update post:", error.message);
    }
  };

  return (
    <div className="relative">
      <label htmlFor="my_modal_6" className="flex justify-center">
        <span className="border-r pr-2 cursor-pointer">
          <FaRegEdit />
        </span>
      </label>

      {/* Modal Box */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-[900px]">
          <div className="isolate bg-white px-6 py-14 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Edit Post
              </h2>
              <p className="mt-2 text-lg/8 text-gray-600">
                Update details of your {post.postType} item.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(handleUpdatePost)}
              className="mx-auto mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
            >
              {/* Title */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    id="title"
                    {...register("title")}
                    type="text"
                    defaultValue={post.title}
                    placeholder="Enter the title of the item"
                    className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Post Type */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="post-type"
                  className="block text-sm font-medium text-gray-900"
                >
                  Post Type
                </label>
                <div className="mt-2">
                  <select
                    {...register("postType")}
                    id="post-type"
                    defaultValue={post.postType}
                    className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600"
                  >
                    <option disabled>Select Post Type</option>
                    <option value="lost">Lost</option>
                    <option value="found">Found</option>
                  </select>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="thumbnail"
                  className="block text-sm font-medium text-gray-900"
                >
                  Thumbnail (Image)
                </label>
                <div className="mt-2">
                  <input
                    id="thumbnail"
                    {...register("thumbnail")}
                    type="text"
                    defaultValue={post.thumbnail}
                    placeholder="Image URL"
                    className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-900"
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
                    className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    defaultValue={post.category}
                    {...register("category")}
                    className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600"
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
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-900"
                >
                  Location
                </label>
                <div className="mt-2">
                  <input
                    id="location"
                    {...register("location")}
                    defaultValue={post.location}
                    type="text"
                    placeholder="Enter the location"
                    className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Date Lost */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="date-lost"
                  className="block text-sm font-medium text-gray-900"
                >
                  Date Lost/Found
                </label>
                <div className="mt-2">
                  <DatePicker
                    selected={LostOrFoundDate}
                    onChange={(date) => setLostOrFoundDate(date)}
                    className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="contact-info"
                  className="block text-sm font-medium text-gray-900"
                >
                  Contact Information
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="mt-2">
                    <input
                      id="name"
                      type="text"
                      value={user.displayName}
                      readOnly
                      className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 "
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="text"
                      value={user.email}
                      readOnly
                      className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 "
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 sm:col-span-6">
                <Button1 className="modal-action grid grid-cols-1 w-full hover:bg-blue-700">
                  {location ? (
                    <label
                      className="relative cursor-pointer "
                      htmlFor="my_modal_6"
                    >
                      Update Post
                    </label>
                  ) : (
                    "Update Post"
                  )}
                </Button1>
              </div>
              <div className="modal-action absolute top-5 right-5">
                <label
                  htmlFor="my_modal_6"
                  className="text-3xl text-orange-500 cursor-pointer font-extrabold hover:scale-95"
                >
                  <IoCloseSharp />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
