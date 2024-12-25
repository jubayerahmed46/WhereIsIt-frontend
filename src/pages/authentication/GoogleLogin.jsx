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
    <Button1
      onClick={handlerGoogleLogin}
      className="mt-3 w-[70%] bg-orange-400 font-semibold mx-auto hover:bg-orange-300 text-white"
    >
      Login with <span className="font-bold">Google</span>
    </Button1>
  );
}

export default GoogleLogin;
