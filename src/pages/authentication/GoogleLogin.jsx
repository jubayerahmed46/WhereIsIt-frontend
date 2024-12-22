import Button1 from "../../components/common/btns/Button1";
import useAuth from "../../hooks/useAuth";

function GoogleLogin() {
  const { signinWithGoogle } = useAuth();
  const handlerGoogleLogin = () => {
    signinWithGoogle().then(() => {
      alert("logged in success");
    });
  };
  return (
    <Button1
      onClick={handlerGoogleLogin}
      className="mt-3 w-[70%] bg-orange-400 font-semibold mx-auto hover:bg-orange-300"
    >
      Login with <span className="font-bold">Google</span>
    </Button1>
  );
}

export default GoogleLogin;
