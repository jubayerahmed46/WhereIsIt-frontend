import { Link, useLocation, useNavigate } from "react-router";
import Button1 from "../../components/common/btns/Button1";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import toast from "react-hot-toast";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const { loginWithEmailAndPass } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [err, setErr] = useState("");

  const submitFormData = (data) => {
    setErr("");
    loginWithEmailAndPass(data.email, data.password)
      .then(() => {
        toast.success("Login Successful!");
        reset();
        navigate(`${location.state?.from || "/"}`);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setErr("The email address is already in use!");
            break;
          case "auth/invalid-credential":
            setErr("The credetial is invalid.");
            break;
          case "auth/weak-password":
            setErr("The password is too weak.");
            break;
          default:
            setErr("An error occurred: " + error.message);
        }
      });
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Auth | login</title>
        </Helmet>
        <div>
          <div className="border  border-black/30 dark:border-gray-400/45 py-4 rounded-md max-w-[450px]  mx-auto">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center flex-col ">
              <h2 className=" text-center text-3xl font-bold">Login</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit(submitFormData)}>
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
                      className="mb-3 border-black/30 w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between ">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      {/* <Link className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link> */}
                    </div>
                  </div>

                  <div className="relative ">
                    <input
                      id="password"
                      {...register("password")}
                      type={isVisible ? "text" : "password"}
                      required
                      className="border-black/30 w-full border dark:border-gray-700/40 dark:bg-gray-900  dark:text-white rounded-sm p-2 focus:ring-1 focus:border-[#003366] outline-none"
                    />
                    <button
                      type="button"
                      className="text-xl absolute top-2 right-3"
                      onClick={() => setIsVisible((prev) => !prev)}
                    >
                      {isVisible ? <IoMdEyeOff /> : <IoMdEye />}
                    </button>
                  </div>
                  <p className="text-error my-2 text-xs"> {err && err} </p>
                </div>

                <div>
                  <Button1 className="bg-[#003366] w-full text-white shadow-md font-semibold">
                    Login
                  </Button1>
                </div>
              </form>

              <GoogleLogin />

              <p className="mt-10 text-center text-sm/6 text-gray-500 ">
                New to this website?
                <Link
                  to={"/auth/signup"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  <span className="ml-2 hover:underline">
                    Create new Account
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
