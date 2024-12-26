/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import Button1 from "../../components/common/btns/Button1";
import useAuth from "../../hooks/useAuth";
import { IoCloseSharp } from "react-icons/io5";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import toast from "react-hot-toast";

function RecoveredForm({ itemName, id, handleRecover }) {
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
        handleRecover();
        await instance.post(`/recoveries`, recoveryItem);
      } finally {
        toast.success("Thank you for submitting");
      }
    })();
  };

  return (
    <div className="relative">
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <label
            htmlFor="my_modal_6"
            className="text-3xl rounded-full font-bold text-orange-400 absolute top-4 hover:font-extrabold cursor-pointer right-4 hover:scale-95 transition duration-75"
          >
            <IoCloseSharp />
          </label>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Please fill up the following fields
              </h2>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm/6 font-medium text-gray-900"
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
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  <p className="text-xs my-1 texterr">{locatonError} </p>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    When was that given (Date)
                  </label>
                  <div className="mt-2 w-full flex ">
                    <DatePicker
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2>Your Information </h2>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Your Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        readOnly
                        defaultValue={user.displayName}
                        required
                        autoComplete="name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Your Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        readOnly
                        defaultValue={user.email}
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="imageURL"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Profile imageURL
                    </label>
                    <div className="mt-2">
                      <input
                        id="imageURL"
                        name="imageURL"
                        type="url"
                        readOnly
                        required
                        defaultValue={user.photoURL}
                        autoComplete="imageURL"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <Button1 className="modal-action grid grid-cols-1 w-full ">
                    {location ? (
                      <label
                        className="relative cursor-pointer "
                        htmlFor="my_modal_6"
                      >
                        Submit
                      </label>
                    ) : (
                      "Submit"
                    )}
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
