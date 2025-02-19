import { useLocation, useNavigate } from "react-router";
import Button1 from "../../components/common/btns/Button1";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

function GoogleLogin() {
  const { signinWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handlerGoogleLogin = () => {
    signinWithGoogle()
      .then(() => {
        toast.success("Login Successful!");
        navigate(`${location.state?.from || "/"}`);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            toast.error("The email address is already in use!");
            break;
          case "auth/invalid-credential":
            toast.error("The credetial is invalid.");
            break;
          case "auth/weak-password":
            toast.error("The password is too weak.");
            break;
          default:
            toast.error("An error occurred: " + error.message);
        }
      });
  };
  return (
    <div
      onClick={handlerGoogleLogin}
      className="flex justify-center items-center gap-3 border rounded-md py-2 border-gray-400/40 mt-8 cursor-pointer shadow-md bg-black/5 dark:hover:bg-white/5"
    >
      Login with <span className="font-bold">Google</span>
    </div>
  );
}

export default GoogleLogin;
