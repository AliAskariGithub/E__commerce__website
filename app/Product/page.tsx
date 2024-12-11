"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LuSlidersVertical } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>("Medium");
  const [selectedColor, setSelectedColor] = useState<string>("blue");
  const [showFilter, setShowFilter] = useState(false);

  const handleToggle = () => {
    setShowFilter(!showFilter);
  };

  const colors = [
    { name: "green", bgColor: "bg-[#00C12B]" },
    { name: "red", bgColor: "bg-[#F50606]" },
    { name: "yelloe", bgColor: "bg-[#F5DD06]" },
    { name: "orange", bgColor: "bg-[#F57906]" },
    { name: "lightblue", bgColor: "bg-[#06CAF5]" },
    { name: "blue", bgColor: "bg-[#063AF5]" },
    { name: "purple", bgColor: "bg-[#7D06F5]" },
    { name: "pink", bgColor: "bg-[#F506A4]" },
    { name: "black", bgColor: "bg-[#000000]" },
    { name: "white", bgColor: "bg-[#ffffff]" },
  ];

  const products = [
    {
      id: "10",
      name: "Gradient Graphic T-shirt",
      ratestar: "★★★☆",
      rating: 3.5,
      price: "$145",

      image:
        "https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdXM50mhn6bTCgy5ZIKXsA-QjkRV4OaWX-Cnze9In8KoiidKM66~GMFQpGbd092AChJXdOH87aE7q6hd4B1aki0Zz21BapPXWfD-ZAzl0lGNR~NulEIkdSnE0jX-oJqDrfSsv-jSbNtcdHYlXxSvFTZm-AB00loKN8T-Mhiy9cl866BvdooVFZzcYdQ~1RiMRLltq2fST3WpaC9SBLc~x-TGafP45Zx4drobNz~D3j59Pp9iOCBHkQ9haqy425Ct361dCDYxZr626Le81QLSCBQRdkwfU1Z2aniwh1PeZn~oL6HzotM1wzQDPrdZkY~jkuEs62dpjO-DdRcUCOah6Q__",
    },
    {
      id: "11",
      name: "Polo with Tipping Details",
      ratestar: "★★★☆",
      rating: 4.5,
      price: "$180",
      image:
        "https://s3-alpha-sig.figma.com/img/aecd/8196/485b30fd30b3226e09bb8f8e494c260b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E00uJe4ScIJlOs2OZBX804wKT5KHfRmXE85TrrOIBj2NsxTb9e-AI9Nz8BCZEjDXtB8GAh48M9m-2EpjFkQLUSO3oCc~OvsDJ241EMvsgtWKA4GDflZnmiEmXSqt~YLnZcnYLExdaZfQM51bJj3utafVWSBuNNIswABuvWmVBt1vMvveA~ua9KLPgdOoE2NjV3zhFFkwQ~OabH2NUXvySpDPyVzjMZRkpoCPjme~cSwNI2LZuBmnCei1MvoGRGuVUe6E6rQtwtcMjMBOPhcrpNgtx0IDmSX4SiGizGiDq-MpJuBZiM2qyX1lfFbuHR5iH4YW31927b~7rI7BC6c4wQ__",
    },
    {
      id: "12",
      name: "Black Stripted T-shirt",
      ratestar: "★★★★★",
      rating: 5,
      price: "$120",
      fakeprice: "$150",
      discount: "-30%",
      image:
        "https://s3-alpha-sig.figma.com/img/6115/920b/12942762aefb7c7ac954e78b76284504?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnB39R0poDoKWZVk7khTTTmcfh5KU-cvHy2m~8vJJhQFe6ExdCS-E70jqpei5gUbnr5nF9r2LTQ~09rrJsvnc4hbQztpuXBRvAMSxTmaDs~wB9EmwmTorwsWKBEMLHByHOcpL7mtAIxtXGltw5a1IlZfiHNzYcXE8azIvDc0WPCiwSa5H0Qgd3KFSHL9E65QbQG9uReF9mC1Fp5ZMsC8h~2f3bNgm4YiE6Z3MHMFgQyJqsgT1ulE4ldMv2CTwjXP9f5paEg2SgC55wX0xdJClZLS5s1PnKkyW7jot0U1TMd5J1g5T5CMv8Cxq17p1HfZB19f06~rwrhW4393RyMIWQ__",
    },
    {
      id: "6",
      name: "Skinny Fit Jeans",
      ratestar: "★★★☆☆",
      rating: 3.5,
      price: "$240",
      fakeprice: "$260",
      discount: "-20%",
      image:
        "https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqcLL5UmMTnyPt9DvALODCglbRkma8WTB8Wb2rSdpGwQgz1oRRxOHRn2a62WzfL6OZj-qqVtbbo3w~4L5zhulyuteZnnG~A0KlNk-SdSHYnPBDaU877kleeDQY2W7rKbK-bTuxi1wKKOYGtYGvBWQyKCkL8UcarLoe2mdZoDGeqx5W~EwlPeCPHh2cb9R9KHpZ2eSBRZQVI1t8fjGnT~s6G2QtgQM6U3KibhoZkasMAQDjX8PavjtMny7hsBRTGanVyprSXELRnwaPDwFBxNcc8y2tZ~IEm9ljqsr1wSaYyv2xxtIpCvpe~NEBbZ1w1Yt2sMM02fqNHbYyWuwlGIyA__",
    },
    {
      id: "3",
      name: "ONE LIFE GRAPHIC T-SHIRT",
      ratestar: "★★★★★",
      rating: 5,
      price: "$180",
      image:
        "https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PwSkNZuEpNHoUhWJRCYDcRS4LtWawCWpXaS68hDv2IS33ta5lFCZiCcFpvkNO7ncNrY9Y2exa1AzHJM3BRy0Lfng30cBG787Xiq1rmYy25J-PQdfisKietiEtTTQYoN0ssFYJfWlX9Le60-dHNYeBSI4hQJqJYzuFpojY-EkEWcl4vsC3ffsoJxDU0eFB9YaTQ0WNyswsYMe~3fzJ-KM2s3fRhadwXMoPR3lc9xg8Gy1NsLslrVY6RkhMVASlWJ6IRxix7DtKiTpJe8JK66YgyyGzKR6Z~ZfJpH62z0Cz3Hpcv3mulfXqoIYE1HfUPRdWKzZh8lPvOWhGJyOcFvE-w__",
    },
    {
      id: "8",
      name: "Sleeve Stripted T-shirt",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$130",
      fakeprice: "$160",
      discount: "-30%",
      image:
        "https://s3-alpha-sig.figma.com/img/3457/42c2/7cc557f42cf1d489f7cc811856b90e9f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtH9dFseVJHa~LsbYDgZvpO9lYcC3kbKcG-4gXhmXknILWHrbfdoYjnN7v9lUSqFbGdc1b7j~zZYzVOZyorZDVus5KTUrarfDdNlmpPdXKNwgzfwq7pzuAyvjKKJ2bKxOTGDvdFYE-2nsmq8Y5YKuDeNvtMFgT59Ozkzk0NkXA9roUN-gv9otcMT8xVKkQS3qIEt7B4XyBVy1yZNWSsCqFWgYJpdsobZgQlLWa3vsDTN5xqjVVjZQB440Opd-tSbc1XLtcYpZ6L7nG5GPsogJky0T1gcy2BnzDhWtGReQy2Xy7FtVfqOYXk0M2t7yQvZZoOLOIHKpERHCnpnwGoJlg__",
    },
    {
      id: "16",
      name: "Vertical Striped Shirt",
      ratestar: "★★★★★",
      rating: 5,
      fakeprice: "$232",
      discount: "-20%",
      price: "$212",
      image:
        "https://s3-alpha-sig.figma.com/img/e01f/5d3c/d9029bd465a4c7158689ab1619693014?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EueWyrVgo~G9vpRlqYVlc87xzLb~lxIXuaSokQ-20rq9jjlugTUiakaOK2wNatYl9gU2sBnyQmcfg4YQMZJB~XRSRSVrCCisf6Aeq0si00DTBP~2Eyuo510FzCz8Ii9wutCo1LWVDVUTIXnfgOvPd9bHn5CPwUvg6wPtRrjOJRVXuGGDHwiH2TOqBG8y8KibQmVaCzDr1ez14dCzuB8DBEW4nB48pK8Donobr1IpGLAwx4sCieDUXFBsJa-Cn2-uvv34gh7LeDFZI~zG39efErs6p1qhBufGIP63Zdfhs8U1saPKrYyvrqEkFJDdwP289UCeel~JUtBtz1zaG85eZg__",
    },
    {
      id: "9",
      name: "Courage Graphic T-shirt",
      ratestar: "★★★★",
      rating: 4,
      price: "$145",

      image:
        "https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9Wr9HtnDWeGaQudQyHB7mjjfkAjuWvJdTPQCyNh6Kh1LyyV5tWyN0~FvrnNZibnzhwc1IWNi6EI2xgnnmq-v6eRRzUV3ScZuYzcPEyaYuIuEsv4cMbhPLn9wYu5lxDOtuWZkUNo3hcO4VDOCEoa8UIF6WXdINnCH9XPlwi5IlBtTrmYGeMcokvZAGJ93nEjS7cUctEf-9vyT8POmrUEKnC-2HDS25dcFlfKowt80D5Mi338FrcXxmAtyi9Ut7Pmm9sKQNgGhOV~LcENR0TvCEE--wLSGQ6BiO6k4h3i9WQOjjKwKEskEXE6J~PINniTbldzmUZp25H0iC9ud6Lp7A__",
    },
    {
      id: "14",
      name: "Loose Fit Bermuda Shorts",
      ratestar: "★★★",
      rating: 3,
      price: "$80",
      image:
        "https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsTpGVGo3iiHrKUtY-SniBMxRhG2oU5H7NBAuSM-vdr85to8XkEUsa-6odPRuPYkxzS6hBAdwFfqK8TFLtZByuV-J9auXa0OoYjkAeVTjSFNnsjjkUkXybByJXKnfuU3FF8BXEQcclLcpk0~le4sdqBK8rmUvUUj0TWmAdDYTYBHfqBGxKmqNpXhP2YAGkiPgF~IJllRrfNH7tQSU5TMjsRX2Tg4FsNis0cNx4CUUGfvUssidiB-EHt-hC38kpF38ZLlydYC3vZGcbXEztfV-iXJQg3IeXmLAWeJliQ8dOT5em~OY2cBKQpaBtKUIYx6YZ1xWIStnUAZO6tM3MbanA__",
    },
    {
      id: "5",
      name: "T-shirt with Tapa Details",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$120",
      image:
        "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N467qjnuMQRS0d40H4Z16YEYUnYViWhyD~kzMCwXPxGhASArDiFwcVKZ6fx6qHXXOBr~BgM6aACxrTv9JJf4JtqrTHE2u716LdWwFLvhCw5eHO-Ivuxzpr2R1u8FWudlQapRQyM6dhrlsIR-R-t2fm-lS4lLdeJq9-QbhHzAQbFFQBUg6NB74gMOgCD6SmICBSUKe5W10WKqEmh1LYV55nX2~7SEsdxZuq-cp7Mn8OrU9NvS493XG3nYQIzM63XxD5ciHEOd8O-zCdTAm0-x0ZIF8ySlZKUOR8oHGsOvSwmugAImS4ejq7K2aVYgOsZ2OUUfghWMWliQU6wtv3mmjQ__",
    },
    {
      id: "15",
      name: "Faded Skinny Jeans",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$210",
      image:
        "https://s3-alpha-sig.figma.com/img/f180/c768/08e2ff8a46be56aa933f031aed3abe75?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a87C1cphdhYbKSf1~9oQhWXeHTNHU97jfpujV7pu4d-7Ca1df2q50TLR2w-lbEwWtEBJFrDBVun8CgxJ0jXSm1VxOHEBMe9Dpns48ZvhGLgWAJ4UwE8pQfvtd90QFZC-XwOCF4P7kVpQIHIGR2w1S-UzA8AixnCLSLCdYKLBqo1eqs2cc03vyg~xB03AxV9MQlQeqtn7CLTkCrdlnOBj~p5~~Etf-GmWhVrd9HtmlVytTR6szUAngCWlrL3AJbVzcnrYLQpoQz9J~Wo-oYnNI6wSVKiRmoWG-yVEe0tOKb1msoiv-nEu0ZdFiUajj3bFBF9QVmj-WfmvOWfG70nQHw__",
    },
    {
      id: "13",
      name: "Polo with Contrast Trims",
      ratestar: "★★★★",
      rating: 4,
      price: "$212",
      fakeprice: "$242",
      discount: "-20%",
      image:
        "https://s3-alpha-sig.figma.com/img/15e6/8c10/3095df99e905b164718348af952a0f64?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1SPPj5Gl6XufUX6ndp-IXbtvT-h~9o2Rp~48If3vrL918Y2bgHIxWgwNixXSKwa-1m-AxfB~~O-B00Bdj~OGDjUZXX1N2lg64ne4m3sQRhm1A8M7XxCZyHpMngsNYgqM29CBxwewbJRbS4Ld0pskjDfDXzQ9Wqt94mhIP3f3hMLfe5nvwZLy0it51WCS9BozJV29oVqsOgHbS9kFI~2K70RpmgxGycfmQcoJZkBtNLMIGtDVngnltdAaPFBoRQ4vjmcFoFXZkU~e5jjYiVBEzMx8FyQ3yvNIajFsKo8Jdd02Zn5SIPe2vDHcoWcS10CjePniSNLA8B9s5qcfSI5Gg__",
    },
    // Add more products as needed...
  ];

  return (
    <>
      <div className="container px-6 mx-auto mt-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Casual</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container px-6 py-10 mx-auto md:flex">
        <div className="container flex items-center justify-between px-4 mx-auto mt-5 mb-20 md:hidden">
          <b className="text-xl font-bold leading-tight">
            Casual{" "}
            <span className="block mt-1 ml-2 text-sm text-black/60">
              Showing 1-10 of 100 Products
            </span>
          </b>
          <button
            onClick={handleToggle}
            className="relative flex items-center justify-center p-2 rounded-full"
          >
            <LuSlidersVertical size={24} />
          </button>

          {/* Filter Popup */}
          <div
            className={`fixed bottom-0 left-0 w-full h-full z-30 bg-white shadow-lg p-6 transform transition-transform duration-300 ${
              showFilter ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Popup Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold">Filters</h2>
              <button
                onClick={handleToggle}
                className="text-gray-600 hover:text-black"
              >
                <IoClose size={30} />
              </button>
            </div>

            {/* Filter Content */}
            <div className="overflow-y-auto max-h-[80vh] pb-4">
              {/* Categories */}
              <div className="flex flex-col gap-3 mb-8">
                {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between pb-2 text-sm text-gray-700 border-b"
                    >
                      {item}
                      <MdKeyboardArrowRight />
                    </div>
                  )
                )}
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Price</h3>
                  <MdOutlineKeyboardArrowUp />
                </div>
                <input type="range" min="50" max="200" className="w-full" />
              </div>

              {/* Color Selector */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Select Colors</h3>
                  <MdOutlineKeyboardArrowUp />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative w-8 h-8 rounded-full border border-gray-400 ${color.bgColor}`}
                    >
                      {selectedColor === color.name && (
                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/40">
                          <FaCheck size={15} color="black" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Size</h3>
                  <MdOutlineKeyboardArrowUp />
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "XX-Small",
                    "X-Small",
                    "Small",
                    "Medium",
                    "Large",
                    "X-Large",
                    "XX-Large",
                    "3X-Large",
                    "4X-Large",
                  ].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 border rounded text-sm ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dress Style */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Dress Style</h3>
                  <MdOutlineKeyboardArrowUp />
                </div>
                <div className="flex flex-col gap-3">
                  {["Casual", "Formal", "Party", "Gym"].map((style, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between pb-2 text-sm text-gray-700 border-b"
                    >
                      {style}
                      <MdKeyboardArrowRight />
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full py-4 text-white bg-black rounded-full">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="flex-col hidden w-full md:w-1/4 md:flex">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold">Filters</h2>
              <LuSlidersVertical />
            </div>

            <div className="flex flex-col gap-2 mb-12">
              <div className="flex items-center justify-between text-black/50">
                T-shirts
                <MdKeyboardArrowRight />
              </div>
              <div className="flex items-center justify-between text-black/50">
                Shorts
                <MdKeyboardArrowRight />
              </div>
              <div className="flex items-center justify-between text-black/50">
                Shirts
                <MdKeyboardArrowRight />
              </div>
              <div className="flex items-center justify-between text-black/50">
                Hoodie
                <MdKeyboardArrowRight />
              </div>
              <div className="flex items-center justify-between text-black/50">
                Jeans
                <MdKeyboardArrowRight />
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center justify-between w-full mb-8">
                <h3 className="text-lg font-semibold">Price</h3>
                <MdOutlineKeyboardArrowUp />
              </div>
              <input type="range" min="50" max="200" className="w-full" />
            </div>

            <div className="mb-12">
              <div className="flex items-center justify-between w-full mb-8">
                <h3 className="text-lg font-semibold">Select Colors</h3>
                <MdOutlineKeyboardArrowUp />
              </div>
              <div className="grid items-center justify-center grid-cols-5 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-8 h-8 rounded-full border border-black ${color.bgColor}`}
                  >
                    {selectedColor === color.name && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/30">
                        <FaCheck size={15} color="lightgray" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center justify-between w-full mb-8">
                <h3 className="text-lg font-semibold">Size</h3>
                <MdOutlineKeyboardArrowUp />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                {[
                  "XX-Small",
                  "X-Small",
                  "Small",
                  "Medium",
                  "Large",
                  "X-Large",
                  "XX-Large",
                  "3X-Large",
                  "4X-Large",
                ].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-1 border rounded ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start justify-center mb-4">
              <div className="flex items-center justify-between w-full mb-8">
                <h2 className="text-lg font-semibold">Dress Style</h2>
                <MdOutlineKeyboardArrowUp />
              </div>

              <div className="flex flex-col w-full gap-2">
                <div className="flex items-center justify-between text-black/50">
                  Casual
                  <MdKeyboardArrowRight />
                </div>
                <div className="flex items-center justify-between text-black/50">
                  Formal
                  <MdKeyboardArrowRight />
                </div>
                <div className="flex items-center justify-between text-black/50">
                  Party
                  <MdKeyboardArrowRight />
                </div>
                <div className="flex items-center justify-between text-black/50">
                  Gym
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>

            <Button className="w-full px-6 py-4 mt-4 rounded-full">
              Apply Filter
            </Button>
          </aside>

          {/* Product Grid */}
          <main className="w-full md:w-3/4">
            <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 gap-9 mb-14">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center justify-center p-1 transition-shadow duration-300 bg-white rounded shadow-lg jus hover:shadow-xl"
                >
                  <Link href={`/Product/Product${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-40 rounded-md"
                    />
                    <h2 className="mt-4 text-xl font-semibold text-black/80 line-clamp-1">
                      {product.name}
                    </h2>
                    <p className="flex items-center justify-start gap-2 text-2xl text-yellow-400">
                      {product.ratestar}{" "}
                      <span className="text-xs text-black">
                        {" "}
                        {product.rating}/5
                      </span>
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="flex items-center justify-between gap-2 font-medium justify-betw text-black/50">
                        {product.price}{" "}
                        <span className="text-xs line-through text-black/50">
                          {product.fakeprice}
                        </span>{" "}
                      </p>
                      <span className="text-xs text-right text-red-500">
                        {product.discount}
                      </span>
                    </div>
                  </Link>{" "}
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="items-center justify-between hidden mb-10 md:flex">
              <button className="flex items-center justify-center gap-3 px-4 py-2 text-sm border rounded">
                <GrLinkPrevious />
                Previous
              </button>
              <div className="flex items-center justify-center gap-2">
                {[...Array(10)].map((_, index) => (
                  <button
                    key={index}
                    className="py-2 px-4 text-[10px] border rounded hover:bg-zinc-300/70"
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button className="flex items-center justify-center gap-3 px-4 py-2 text-sm border rounded">
                Next <GrLinkNext />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
