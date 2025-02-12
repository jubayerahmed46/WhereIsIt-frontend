import { HiOutlineLogout } from "react-icons/hi";
import Button1 from "../../components/common/btns/Button1";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

function LogoutUser() {
  const { logOut } = useAuth();
  const handleLogout = () => {
    const handleConfirm = (t) => {
      toast.dismiss(t.id);
      toast.promise(logOut(), {
        loading: "Processing...",
        success: <b>Logout Successfull</b>,
        error: <b>opps, logout failed.</b>,
      });
    };

    toast((t) => (
      <span>
        Are You <b>Sure</b>?
        <button
          className="bg-orange-300 p-1 rounded-md text-white m-1"
          onClick={() => toast.dismiss(t.id)}
        >
          Dismiss
        </button>
        <button
          className="bg-green-400 p-1 rounded-md text-white m-2"
          onClick={() => handleConfirm(t)}
        >
          confirm
        </button>
      </span>
    ));
  };
  return (
    <Button1
      onClick={handleLogout}
      className={" bg-white text-black hover:bg-white/90"}
    >
      <HiOutlineLogout className="text-xl text-black" />
    </Button1>
  );
}

export default LogoutUser;
