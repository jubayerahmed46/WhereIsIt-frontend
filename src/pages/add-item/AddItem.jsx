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
import addPost from "/public/add.png";
import SectionHeading from "../../components/SectionHeading";

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
  const instance = useAxiosInstance();
  const navigate = useNavigate();

  const handleAddItems = async (formData) => {
    formData.date = LostOrFoundDate.toISOString().slice(0, 10);
    formData.name = user.displayName;
    formData.email = user.email;
    try {
      await instance.post(`/posts`, formData);
      reset();
      toast.success("Posted Successfully");
      navigate("/manage-my-posts");
    } catch (error) {
      return;
    }
  };

  return (
    <div className="mx-auto max-w-7xl lg:px-9 md:px-5 px-3 text-gray-900 dark:text-white/90 ">
      <Helmet>
        <title>Add New Post</title>
      </Helmet>
      <div>
        <SectionHeading>Post for Lost or Found Item</SectionHeading>
      </div>

      <div className="mb-16 flex lg:gap-24 gap-14 lg:flex-row flex-col ">
        <form
          onSubmit={handleSubmit(handleAddItems)}
          className="space-y-4 w-full bg-[#00336618] dark:bg-gray-900/50 p-6 rounded-md shadow-md "
        >
          <div>
            <label className="block font-bold  mb-1" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              {...register("title")}
              type="text"
              required
              className="w-full border  dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none  "
            />
          </div>

          <div>
            <label className="block font-bold mb-1" htmlFor="post-type">
              Post Type
            </label>
            <select
              {...register("postType")}
              id="post-type"
              required
              className="w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
            >
              <option disabled>Select Post Type</option>
              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>
          </div>

          <div>
            <label className="block font-bold mb-1" htmlFor="thumbnail">
              Thumbnail (Image URL)
            </label>
            <input
              id="thumbnail"
              {...register("thumbnail")}
              type="text"
              required
              className="w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
            />
          </div>

          <div>
            <label className="block font-bold mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              required
              className="w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label className="block font-bold  mb-1" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              {...register("category")}
              className="w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
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

          <div>
            <label className="block font-bold" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              {...register("location")}
              type="text"
              required
              className="w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
            />
          </div>

          <div>
            <label className="block font-bold" htmlFor="date-lost">
              Date Lost/Found
            </label>
            <DatePicker
              selected={LostOrFoundDate}
              onChange={setLostOrFoundDate}
              className="w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
            />
          </div>

          <Button1 className="w-full bg-[#003366] text-white hover:bg-[#1a4979]">
            Add Post
          </Button1>
        </form>

        <img
          src={addPost}
          className="lg:h-[500px] md:h-[300px] mx-auto my-auto"
          alt=""
        />
      </div>
    </div>
  );
}
