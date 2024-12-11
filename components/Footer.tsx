import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <>
      <div className="container mb-10">
        <div className="flex flex-col items-center justify-between gap-6 px-6 py-6 mx-6 bg-black lg:flex-row lg:gap-0 lg:px-16 rounded-2xl">
          <h1 className="max-w-lg text-4xl font-extrabold text-left text-white md:text-4xl lg:text-4xl font-bold-1 lg:text-left">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="flex flex-col items-center justify-center w-full gap-4 lg:w-auto">
            {/* Email Input */}
            <div className="flex items-center px-4 py-2 bg-white rounded-full gap-2 w-full md:w-[350px]">
              <TfiEmail color="gray" size={20} />
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="flex-1 px-2 py-1 text-sm outline-none"
              />
            </div>
            {/* Subscribe Button */}
            <button className="w-full md:w-[350px] flex items-center justify-center px-4 py-2 bg-white rounded-full text-black font-bold hover:text-black/70 hover:bg-white/90 transition duration-150">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
      <footer className="py-10 ">
        <div className="container px-6 mx-auto">
          <div className="justify-between gap-20 md:flex">
            {/* Brand Section */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">SHOP.CO</h2>
              <p className="max-w-xs mt-2 text-gray-600 transition duration-150 ">
                We have clothes that suit your style and which you&spoa;re proud
                to wear. From women to men.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="https://x.com/">
                  <FaTwitter size={20} />
                </Link>
                <Link href="https://www.facebook.com/">
                  <FaFacebook size={20} />
                </Link>
                <Link href="https://www.instagram.com/">
                  <FaInstagram size={20} />
                </Link>
                <Link href="https://github.com/">
                  <VscGithubInverted size={20} />
                </Link>
              </div>
            </div>

            {/* Links Sections */}
            <div className="grid flex-wrap items-start justify-start grid-cols-2 space-x-0 md:flex md:space-x-10">
              {["Company", "Help", "FAQ", "Resources"].map((section, idx) => (
                <div key={idx} className="mb-6 md:mb-0">
                  <h3 className="mb-4 text-lg font-medium">{section}</h3>
                  <ul className="space-y-2">
                    {section === "Company" && (
                      <>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Features
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Works
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Career
                          </Link>
                        </li>
                      </>
                    )}
                    {section === "Help" && (
                      <>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Customer Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Delivery Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Terms & Conditions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Privacy Policy
                          </Link>
                        </li>
                      </>
                    )}
                    {section === "FAQ" && (
                      <>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Account
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Manage Deliveries
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Payments
                          </Link>
                        </li>
                      </>
                    )}
                    {section === "Resources" && (
                      <>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Free eBooks
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            Development Tutorial
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            How-to Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-xs text-gray-600 transition duration-150 hover:text-black underline-hover "
                          >
                            YouTube Playlist
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col items-center justify-between pt-4 mt-10 text-sm text-gray-500 border-t md:flex-row gap-y-3">
            <p className="w-max">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex space-x-4">
              <Image
                src="/card01.png"
                alt="Visa"
                width={1000}
                height={1000}
                className="w-14"
              />
              <Image
                src="/card02.png"
                alt="PayPal"
                width={1000}
                height={1000}
                className="w-14"
              />
              <Image
                src="/card03.png"
                alt="MasterCard"
                width={1000}
                height={1000}
                className="w-14"
              />
              <Image
                src="/card04.png"
                alt="Apple Pay"
                width={1000}
                height={1000}
                className="w-14"
              />
              <Image
                src="/card05.png"
                alt="Apple Pay"
                width={1000}
                height={1000}
                className="w-14"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
