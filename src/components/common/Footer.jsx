import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800 border-t bg-gray-300">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Logo Section */}
        <div className="lg:w-1/3">
          <Link
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="shrink-0 ">
              <img
                className="h-10 "
                src="/footer_logo.png"
                alt="WhereIsIt Logo"
              />
            </div>
          </Link>
          <p className="mt-4 text-sm mr-7">
            WhereIsIt is your trusted platform for connecting individuals who
            have lost personal belongings with those who have found them.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {/* About Links */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              About
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Services
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Report Found Item</Link>
              </li>
              <li>
                <Link to="/">Browse Lost Items</Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Resources</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Connect</h3>
            <div className="flex justify-start space-x-3">
              <a
                href="https://facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-1"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-1"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-1"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © {currentYear} WhereIsIt. Helping you reconnect with your lost
        belongings.
      </div>
    </footer>
  );
}

export default Footer;
