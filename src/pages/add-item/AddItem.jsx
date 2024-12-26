import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Button1 from "../../components/common/btns/Button1";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { useNavigate } from "react-router";

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

export default function AddItem() {
  const [LostOrFoundDate, setLostOrFoundDate] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.displayName);
  const instance = useAxiosInstance();
  const navigate = useNavigate();

  const handleAddItems = (formData) => {
    formData.date = LostOrFoundDate.toISOString().slice(0, 10);
    console.log(formData);

    (async function () {
      try {
        await instance.post(`/posts`, formData);
        reset();
        toast.success("Posted Successfully");
        navigate("/manage-my-posts");
      } catch (error) {
        console.log(error.message);
      }
    })();
  };

  return (
    <div className="space-y-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add New Post</title>
      </Helmet>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Post for Lost or Found Item
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Easily post details about a lost or found item to help reunite it with
          its owner. Provide essential information to make it easier for others
          to identify and contact you.
        </p>

        <form
          onSubmit={handleSubmit(handleAddItems)}
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
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
                required
                placeholder="Enter the title of the item"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
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
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              >
                <option disabled>Select Post Type</option>
                <option value="lost">Lost</option>
                <option value="found">Found</option>
              </select>
            </div>
          </div>

          {/* Thumbnail (Image Upload) */}
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
                required
                placeholder="image URL"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
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
                required
                rows="4"
                placeholder="Provide a detailed description of the item"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
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
                {...register("category")}
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
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
              Location where the item was lost
            </label>
            <div className="mt-2">
              <input
                id="location"
                {...register("location")}
                type="text"
                required
                placeholder="Enter the location"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Date Lost */}
          <div className="sm:col-span-3">
            <label
              htmlFor="date-lost"
              className="block text-sm font-medium text-gray-900"
            >
              Date Lost
            </label>
            <div className="mt-2">
              <DatePicker
                selected={LostOrFoundDate}
                onChange={(date) => setLostOrFoundDate(date)}
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Contact Information */}
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
                  {...register("name")}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  readOnly
                  placeholder="Your fullname"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email")}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  readOnly
                  placeholder="Your email"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full border sm:col-span-6">
            <Button1 className={"w-full block"}> Add Post </Button1>
          </div>
        </form>
      </div>
    </div>
  );
}
