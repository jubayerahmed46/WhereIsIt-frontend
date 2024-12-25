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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Auth | login</title>
        </Helmet>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center flex-col">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login to your account
          </h2>
          <GoogleLogin />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(submitFormData)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div className="relative">
                <input
                  id="password"
                  {...register("password")}
                  type={isVisible ? "text" : "password"}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
              <Button1 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login
              </Button1>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 ">
            New to this website
            <Link
              to={"/auth/signup"}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              <span className="ml-2 hover:underline"> Create new Account</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
