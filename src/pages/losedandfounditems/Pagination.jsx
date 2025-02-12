/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";

function Pagination({ handleOnpaginationLoadDate }) {
  const [totalPost, setTotalPost] = useState(0);
  const postPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const instance = useAxiosPublic();

  const pageCount = Math.ceil(totalPost / postPerPage);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await instance.get(`/total-post-count`);
        setTotalPost(data.count);
      } catch (err) {
        return;
      }
    })();
  }, [instance]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await instance.get(
          `/posts?page=${currentPage}&size=${postPerPage}`
        );
        handleOnpaginationLoadDate(data);
      } catch (err) {
        return;
      }
    })();
  }, [currentPage, instance]);

  if (pageCount <= 1) {
    return;
  }

  return (
    <div className="border-t mt-12 py-4 flex justify-center  gap-3">
      <button
        className="text-3xl px-3 bg-orange-500 py-1 rounded-md text-white"
        onClick={() => {
          if (currentPage === 0) {
            setCurrentPage(() => pageCount - 1);
          } else {
            setCurrentPage((prev) => prev - 1);
          }
        }}
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      {[...Array(pageCount).keys()].map((pageNumber, i) => (
        <button
          onClick={() => {
            setCurrentPage(() => pageNumber);
          }}
          className={`${
            currentPage === pageNumber &&
            "border-orange-300 text-white bg-orange-500"
          } text-lg bg-gray-300  border-2 border-gray-400 w-10 aspect-square rounded-sm`}
          key={i}
        >
          {pageNumber + 1}
        </button>
      ))}
      <button
        onClick={() => {
          if (currentPage === pageCount - 1) {
            setCurrentPage(() => 0);
          } else {
            setCurrentPage((prev) => prev + 1);
          }
        }}
        className="text-3xl px-3 bg-orange-500  rounded-md text-white"
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
