"use client";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-6 py-4 bg-white md:hidden">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleToggle}
            className="text-gray-700 transition duration-150 hover:text-black"
          >
            <LuMenu size={28} />
          </button>
          <Link href={"/" } className="text-xl font-extrabold font-bold-1">SHOP.CO</Link>
        </div>
        <div className="flex space-x-4">
          <IoSearch
            className="text-gray-700 transition duration-150 hover:text-black"
            size={20}
          />
          <Link href={"/Cart"}>
            <LuShoppingCart
              className="transition duration-150 text-zinc-500 hover:text-black"
              size={20}
            />
          </Link>
          <FaRegUserCircle
            className="text-gray-700 transition duration-150 hover:text-black"
            size={20}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-40 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={handleToggle}
          className="absolute text-gray-700 transition duration-150 hover:text-black top-11 right-8"
        >
          <IoClose size={28} />
        </button>
        <div className="p-6 mt-5 space-y-6">
          <h1 className="text-2xl font-extrabold font-bold-1">SHOP.CO</h1>
          <Link
            href="/Product"
            className="block text-gray-700 transition duration-150 hover:text-black"
          >
            Shop <RiArrowDropDownLine className="inline" />
          </Link>
          <Link
            href="#onsale"
            className="block text-gray-700 transition duration-150 hover:text-black"
          >
            On Sale
          </Link>
          <Link
            href="#newarrivals"
            className="block text-gray-700 transition duration-150 hover:text-black"
          >
            New Arrivals
          </Link>
          <Link
            href="#brand"
            className="block text-gray-700 transition duration-150 hover:text-black"
          >
            Brands
          </Link>
          <div className="flex items-center gap-2 px-2 py-1 mt-4 border rounded">
            <IoSearch color="gray" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={handleToggle}
        />
      )}

      <div className="container items-center justify-between hidden px-8 py-4 mx-auto md:flex">
        <div className="relative z-10 flex items-center justify-center gap-8">
          <Link href={"/"} className="text-xl font-extrabold font-bold-1">SHOP.CO</Link>
          <div className="flex items-center justify-center ml-2 space-x-6">
            <Link
              href="/Product"
              className="flex items-center justify-center text-gray-700 transition duration-150 hover:text-black underline-hover"
            >
              Shop <RiArrowDropDownLine />
            </Link>
            <Link
              href="#onsale"
              className="text-gray-700 transition duration-150 hover:text-black underline-hover"
            >
              On Sale
            </Link>
            <Link
              href="#newarrivals"
              className="text-gray-700 transition duration-150 hover:text-black underline-hover"
            >
              New Arrivals
            </Link>
            <Link
              href="#brand"
              className="text-gray-700 transition duration-150 hover:text-black underline-hover"
            >
              Brands
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 py-1 border rounded">
            <IoSearch color="gray" />
            <input
              type="text"
              placeholder="Search for products..."
              className="outline-none"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href={"/Cart"}>
            <LuShoppingCart
              className="transition duration-150 text-zinc-500 hover:text-black"
              size={20}
            />
          </Link>
          <FaRegUserCircle
            className="transition duration-150 text-zinc-500 hover:text-black"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
