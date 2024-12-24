import { Helmet } from "react-helmet-async";
import Button1 from "../../components/common/btns/Button1";
import { Link } from "react-router";

function PageNotFound() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add New Post</title>
      </Helmet>
      <div className="flex flex-col min-h-[500px] justify-center items-center">
        <img
          src="https://img.icons8.com/?size=100&id=tSozjKgOoHyT&format=png&color=000000"
          className="min-h-32"
          alt=""
        />
        <h1 className="text-5xl font-bold">Page Not Found!</h1>
        <Link to={"/"}>
          {" "}
          <Button1 className={" mt-2"}>Back to Home</Button1>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
