import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button1 from "../../components/common/btns/Button1";
import RecoveredForm from "./RecoveredForm";

export default function PostDefails() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const [recovered, setRecovered] = useState(false);

  const handleRecover = () => {
    setRecovered(true);
  };

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/${id}`
        );
        setPost(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [id, recovered]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <a
                href={post.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {post.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6  grid grid-cols-5 gap-6">
          <div className="col-span-3 w-full">
            <img
              alt={post.title}
              src={post.thumbnail}
              className=" rounded-lg object-cover w-full h-[400px]"
            />
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 col-span-2"
          >
            {/* Colors */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">Color</h3>

              <fieldset aria-label="Choose a color" className="mt-4"></fieldset>
            </div>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Size guide
                </a>
              </div>

              <fieldset aria-label="Choose a size" className="mt-4"></fieldset>
            </div>
            {post.status === "recovered" ? (
              <Button1 className={"bg-gray-300 hover:bg-gray-300 text-black"}>
                Recovered
              </Button1>
            ) : (
              <label
                htmlFor="my_modal_6"
                className="relative overflow-hidden bg-blue-600 text-white px-6 py-2 rounded-md text-base hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-opacity-75  cursor-pointer"
              >
                {post?.postType?.toLowerCase() == "found"
                  ? "This is Mine"
                  : "Found This!"}
              </label>
            )}
          </form>
        </div>

        {/* post info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {post.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">post information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {/* {post.price} */}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center"></div>
                {/* <p className="sr-only">{reviews.average} out of 5 stars</p> */}
                {/* <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a> */}
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{post.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {/* {post.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{post.details}</p>
              </div>
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
