import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="lg:px-14 md:px-6 px-4 text-white bg-[#003366] text-opacity-90">
      <div className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 justify-between  md:py-16 py-10 mx-auto lg:gap-0 md:gap-8 gap-10">
        {/* Logo Section */}
        <div>
          <Link
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="shrink-0 text-2xl font-semibold">
              {/* <img
                className="h-10 "
                src="/footer_logo.png"
                alt="WhereIsIt Logo"
              /> */}
              WhereIsIt
            </div>
          </Link>
          <p className="mt-4 text-sm mr-7 md:text-left text-center">
            © WhereIsIt Ltd since 2010. All content is copyright. All rights are
            reserved. The WhereIsIt name is registered as a company, domains and
            trademarks, and website registered for international copyright
            protection. For WhereIsIt service marks.
          </p>
        </div>

        <div className="font-medium flex flex-col items-center">
          <h3 className="">Thanks for helping to spread the word...</h3>
          <div className="flex justify-start space-x-3 text-black my-3">
            <a
              href="https://facebook.com"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-300 p-2 rounded-full"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-300 p-2 rounded-full"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  bg-gray-300 p-2 rounded-full"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
          <p>Website problem? Please let us know!</p>
          <Link to={"contact"}>
            {" "}
            <p className="underline cursor-pointer hover:opacity-80">
              Contact us
            </p>
          </Link>
        </div>

        <div>
          <ul className="lg:text-right text-center space-y-1 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Tell a friend</li>
            <li className="hover:underline cursor-pointer">Enter our draw</li>
            <li className="hover:underline cursor-pointer">Become a member</li>
            <li className="hover:underline cursor-pointer">
              Report found property
            </li>
            <li className="hover:underline cursor-pointer">Website map</li>
            <li className="hover:underline cursor-pointer">
              Privacy and terms
            </li>
            <li className="hover:underline cursor-pointer">
              Guarantee and purpose
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
