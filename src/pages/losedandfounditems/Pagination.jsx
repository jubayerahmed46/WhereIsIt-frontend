import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function Pagination({ currentPage, setCurrentPage, totalPost, postPerPage }) {
  const pageCount = Math.ceil(totalPost / postPerPage);

  // if (pageCount <= 1) {
  //   return null;
  // }
  console.log(pageCount);

  return (
    <div className="mt-16 py-4 flex justify-between items-center gap-3">
      <button
        className="text-2xl px-3 py-1 bg-[#003366] text-white rounded-tl-md rounded-bl-md"
        onClick={() => {
          if (currentPage === 0) {
            setCurrentPage(pageCount - 1);
          } else {
            setCurrentPage((prev) => prev - 1);
          }
        }}
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      <div className="flex gap-2">
        {[...Array(pageCount).keys()].map((pageNumber) => (
          <button
            onClick={() => setCurrentPage(pageNumber)}
            className={`${
              currentPage === pageNumber &&
              "bg-[#003366] text-white border border-[#003366] font-extrabold"
            } text-sm font-bold border-2 dark:border-gray-600 w-7 aspect-square rounded-sm`}
            key={pageNumber}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          if (currentPage === pageCount - 1) {
            setCurrentPage(0);
          } else {
            setCurrentPage((prev) => prev + 1);
          }
        }}
        className="text-2xl px-3 py-1 rounded-br-md rounded-tr-md bg-[#003366] text-white"
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
