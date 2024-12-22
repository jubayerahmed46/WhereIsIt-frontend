import Button1 from "../../components/common/btns/Button1";
import useAuth from "../../hooks/useAuth";

function LogoutUser() {
  const { logOut } = useAuth();
  const handleLogout = () => {
    const conf = confirm("are you sure to logout?");

    if (conf) {
      logOut();
    }
  };
  return (
    <Button1
      onClick={handleLogout}
      className={" focus:ring-gray-400 hover:bg-gray-700/80 bg-gray-700/90"}
    >
      Logout
    </Button1>
  );
}

export default LogoutUser;
