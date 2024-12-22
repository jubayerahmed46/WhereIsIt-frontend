import { Link, useNavigate } from "react-router";
import Button1 from "../../components/common/btns/Button1";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const { loginWithEmailAndPass } = useAuth();
  const navigate = useNavigate();

  const submitFormData = (data) => {
    console.log(data);
    loginWithEmailAndPass(data.email, data.password).then(() => {
      alert("logged");
      reset();
      navigate("/");
    });
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
              <div>
                <input
                  id="password"
                  {...register("password")}
                  type="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
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
