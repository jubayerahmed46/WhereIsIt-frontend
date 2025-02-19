/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import Button1 from "../../components/common/btns/Button1";
import useAuth from "../../hooks/useAuth";
import { IoCloseSharp } from "react-icons/io5";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import toast from "react-hot-toast";

function RecoveredForm({ itemName, id, refetch }) {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const [location, setLocation] = useState("");
  const [locatonError, setLocatonError] = useState("");
  const instance = useAxiosInstance();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) {
      setLocatonError("You have to must fill up this field!");
      return;
    }

    const recoveryItem = {
      itemTitle: itemName,
      postId: id,
      recoveredLocation: location,
      recoveredDate: startDate.toISOString().slice(0, 10),
      finderInfo: {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      },
    };

    (async function () {
      try {
        await instance.post(`/recoveries`, recoveryItem);
      } finally {
        setLocation("");
        setStartDate(new Date());
        toast.success("Thank you for submitting");
        refetch();
      }
    })();
  };

  return (
    <div className="relative">
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box  dark:bg-[#101010] dark:text-white rounded-md">
          <label
            htmlFor="my_modal_6"
            className="text-3xl rounded-full font-bold dark:text-white text-black absolute top-4 hover:font-extrabold cursor-pointer right-4 hover:scale-95 transition duration-75"
          >
            <IoCloseSharp />
          </label>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className=" text-center text-2xl/9 font-bold tracking-tight dark:text-white/90 mb-5">
                Recover Item
              </h2>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium  dark:text-white/85"
                  >
                    Where was that given (location name)
                  </label>
                  <div className="mt-2">
                    <input
                      id="location"
                      name="location"
                      type="location"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      autoComplete="location"
                      className="border dark:border-gray-400/40 border-black/30 w-full rounded-md outline-none dark:bg-black/65 py-2 px-3 dark:text-gray-400 dark:focus:ring-1 dark:ring-white/20 focus:ring-1 ring-black/65 "
                    />
                  </div>
                  <p className="text-xs my-1 texterr">{locatonError} </p>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium  dark:text-white/85 text-center"
                  >
                    When was that given (Date)
                  </label>
                  <div className="mt-2 w-full flex  justify-center">
                    <DatePicker
                      className="dark:border-gray-400/40 border-black/30 border border-black w-full rounded-md outline-none dark:bg-black/65 py-2 px-3 dark:text-gray-400 dark:focus:ring-1 dark:ring-white/20 focus:ring-1 ring-black/65"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div className=" flex justify-center">
                  <Button1 className=" bg-[#003366] hover:bg-[#003366cf] mt-4 px-3 text-white  w-full ">
                    Submit
                  </Button1>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecoveredForm;
