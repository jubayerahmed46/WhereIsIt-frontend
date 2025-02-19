import { Link, useNavigate } from "react-router";
import Button1 from "../../components/common/btns/Button1";
import { useForm } from "react-hook-form";
import ValidatePassword from "../../utils/ValidatePassword";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";
import GoogleLogin from "./GoogleLogin";

export default function Signup() {
  const { register, handleSubmit, reset } = useForm();
  const [passError, setPassError] = useState("");
  const { signUpWithEmailAndPass } = useAuth();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const onSubmitData = (formData) => {
    formData.password = formData.password.trim();

    setPassError("");

    const { fullname, email, password, photoURL } = formData;

    if (ValidatePassword(password)) {
      signUpWithEmailAndPass(email, password)
        .then(({ user }) => {
          return updateProfile(user, { displayName: fullname, photoURL });
        })
        .then(() => {
          toast.success("Signin Successfull");
          reset();
          navigate("/");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              setPassError("The email address is already in use!");
              break;
            case "auth/invalid-credential":
              setPassError("The credetial is invalid.");
              break;
            case "auth/weak-password":
              setPassError("The password is too weak.");
              break;
            default:
              setPassError("An error occurred: " + error.message);
          }
        });
    } else {
      setPassError(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit (0-9) and be 6 to 12 characters long without any whitespace."
      );
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Auth | signup</title>
        </Helmet>
        <div>
          <div className="border  border-black/30 dark:border-gray-400/45 py-4 rounded-md max-w-[450px]  mx-auto">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center flex-col ">
              <h2 className=" text-center text-3xl font-bold">
                Create New Account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit(onSubmitData)} className="space-y-3">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium "
                  >
                    Full Name
                  </label>
                  <div>
                    <input
                      id="name"
                      {...register("fullname")}
                      type="text"
                      required
                      className="border-black/30 w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium "
                  >
                    Email address
                  </label>
                  <div>
                    <input
                      id="email"
                      {...register("email")}
                      type="email"
                      required
                      className="border-black/30 w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium "
                  >
                    Photo URL
                  </label>
                  <div>
                    <input
                      id="photoURL"
                      {...register("photoURL")}
                      type="url"
                      required
                      className="border-black/30 w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      {...register("password")}
                      type="password"
                      required
                      className="relative border-black/30 w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
                    />
                    <button
                      type="button"
                      className="text-xl absolute top-2 right-3"
                      onClick={() => setIsVisible((prev) => !prev)}
                    >
                      {isVisible ? <IoMdEyeOff /> : <IoMdEye />}
                    </button>
                  </div>
                  <p className="text-xs text-error mt-1">{passError} </p>
                </div>

                <div>
                  <Button1 className="bg-[#003366] w-full text-white shadow-md font-semibold">
                    Signup
                  </Button1>
                </div>
              </form>
              <GoogleLogin />
              <p className="mt-10 text-center text-sm/6 text-gray-500 ">
                New to this website
                <Link
                  to={"/auth/login"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  <span className="ml-2 hover:underline">
                    {" "}
                    Already have an Account
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
