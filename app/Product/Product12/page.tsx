"use client";
import ReviewCard from "@/components/ReviewCard";
import Image from "next/image";
import { useState } from "react";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { LuSlidersVertical } from "react-icons/lu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Product2 = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  const [selectedColor, setSelectedColor] = useState<string>("white");
  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://s3-alpha-sig.figma.com/img/6115/920b/12942762aefb7c7ac954e78b76284504?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnB39R0poDoKWZVk7khTTTmcfh5KU-cvHy2m~8vJJhQFe6ExdCS-E70jqpei5gUbnr5nF9r2LTQ~09rrJsvnc4hbQztpuXBRvAMSxTmaDs~wB9EmwmTorwsWKBEMLHByHOcpL7mtAIxtXGltw5a1IlZfiHNzYcXE8azIvDc0WPCiwSa5H0Qgd3KFSHL9E65QbQG9uReF9mC1Fp5ZMsC8h~2f3bNgm4YiE6Z3MHMFgQyJqsgT1ulE4ldMv2CTwjXP9f5paEg2SgC55wX0xdJClZLS5s1PnKkyW7jot0U1TMd5J1g5T5CMv8Cxq17p1HfZB19f06~rwrhW4393RyMIWQ__",
  );

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const colors = [
    { name: "white", bgColor: "bg-[#000000]" },
    { name: "green", bgColor: "bg-[#314F4A]" },
    { name: "blue", bgColor: "bg-[#31344F]" },
  ];

  const images = [
    {
      src: "https://s3-alpha-sig.figma.com/img/6115/920b/12942762aefb7c7ac954e78b76284504?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnB39R0poDoKWZVk7khTTTmcfh5KU-cvHy2m~8vJJhQFe6ExdCS-E70jqpei5gUbnr5nF9r2LTQ~09rrJsvnc4hbQztpuXBRvAMSxTmaDs~wB9EmwmTorwsWKBEMLHByHOcpL7mtAIxtXGltw5a1IlZfiHNzYcXE8azIvDc0WPCiwSa5H0Qgd3KFSHL9E65QbQG9uReF9mC1Fp5ZMsC8h~2f3bNgm4YiE6Z3MHMFgQyJqsgT1ulE4ldMv2CTwjXP9f5paEg2SgC55wX0xdJClZLS5s1PnKkyW7jot0U1TMd5J1g5T5CMv8Cxq17p1HfZB19f06~rwrhW4393RyMIWQ__",
      alt: "Black Stripted T-shirt",
    }
  ];

  const products = [
    {
      id: "1",
      name: "Polo with Contrast Trims",
      ratestar: "★★★★",
      rating: 4,
      price: "$212",
      fakeprice: "$242",
      discount: "-20%",
      image:
        "https://s3-alpha-sig.figma.com/img/15e6/8c10/3095df99e905b164718348af952a0f64?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1SPPj5Gl6XufUX6ndp-IXbtvT-h~9o2Rp~48If3vrL918Y2bgHIxWgwNixXSKwa-1m-AxfB~~O-B00Bdj~OGDjUZXX1N2lg64ne4m3sQRhm1A8M7XxCZyHpMngsNYgqM29CBxwewbJRbS4Ld0pskjDfDXzQ9Wqt94mhIP3f3hMLfe5nvwZLy0it51WCS9BozJV29oVqsOgHbS9kFI~2K70RpmgxGycfmQcoJZkBtNLMIGtDVngnltdAaPFBoRQ4vjmcFoFXZkU~e5jjYiVBEzMx8FyQ3yvNIajFsKo8Jdd02Zn5SIPe2vDHcoWcS10CjePniSNLA8B9s5qcfSI5Gg__",
    },
    {
      id: "12",
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
      id: "16",
      name: "Vertical Stripted T-shirt",
      ratestar: "★★★★★",
      rating: 5,
      price: "$212",
      fakeprice: "$232",
      discount: "-30%",
      image:"/images/shirt4.png",
    },
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
              <BreadcrumbLink href="/ProductPage">Shop</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/Men">Men</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>T-shirts</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-start w-full h-full justify-starts">
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row ">
              <div className="flex items-center justify-between md:flex-col gap-y-3 gap-x-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image.src)}
                    className={`relative w-[100px] h-[100px] md:w-20  md:h-20 border p-1 rounded-lg ${
                      selectedImage === image.src
                        ? "border-zinc-400"
                        : "border-gray-300"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                    {selectedImage === image.src && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-md bg-white/30">
                        <FaCheck size={16} color="white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="p-4 border">
                <Image
                  src={selectedImage}
                  alt="Selected T-shirt"
                  width={1000}
                  height={1000}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="mb-2 text-2xl font-extrabold font-bold-1">
            Black Stripted T-shirt
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <FaRegStarHalfStroke />
              </div>
              <p className="ml-2 text-gray-600">5/5</p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">$120</span>
                <span className="mx-3 text-gray-500 line-through">$150</span>
              </div>
              <span className="text-sm font-semibold text-red-500">
                30% OFF
              </span>
            </div>
            <p className="mb-6 text-gray-600">
              This graphic t-shirt is perfect for any occasion. Crafted from
              soft, breathable fabric, it offers superior comfort and style.
            </p>

            <div className="mb-6">
              <h3 className="mb-2 text-lg font-medium">Select Colors</h3>
              <div className="flex space-x-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-8 h-8 rounded-full border ${color.bgColor}`}
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

            <div className="mb-6">
              <h3 className="mb-2 text-lg font-medium">Choose Size</h3>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 border rounded-full duration-150 transition ${
                      selectedSize === size
                        ? "bg-black text-white hover:bg-black/80 "
                        : "bg-white text-black hover:bg-zinc-300/90"
                    }`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="px-2 border"
                >
                  <AiOutlineMinus />
                </button>
                <span className="px-4 border">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="px-2 border"
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <Button className="w-full px-6 py-2 rounded-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10">
          <div className="flex items-center justify-between space-x-4 text-xs border-b md:text-base">
            <button className="w-full pb-2 text-gray-700 transition duration-150 border-b-2 border-transparent hover:border-black hover:text-black">
              Product Details
            </button>
            <button className="w-full pb-2 font-medium transition duration-150 border-b-2 border-black">
              Rating & Reviews
            </button>
            <button className="w-full pb-2 text-gray-700 transition duration-150 border-b-2 border-transparent hover:border-black hover:text-black">
              FAQs
            </button>
          </div>

          {/* Reviews Section */}
          <div className="mt-14">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-2xl font-bold">
                All Reviews{" "}
                <span className="text-xs text-black/60"> (451)</span>
              </h2>
              <div className="flex items-center justify-end gap-5">
                <button>
                  <LuSlidersVertical color="black" />
                </button>
                <button className="items-center hidden gap-1 text-sm md:flex">
                  Latest <MdOutlineArrowDropDown />
                </button>
                <Button className="px-4 py-2 border rounded-full text-white/80 hover:text-white">
                  Write a Review
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ReviewCard
                name="Samantha D."
                rating={5}
                review="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail."
                date="August 14, 2023"
              />
              <ReviewCard
                name="Sumana Za."
                rating={4}
                review="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch."
                date="March 9, 2023"
              />
              <ReviewCard
                name="Kanwal Z."
                rating={4}
                review="“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
                date="June 15, 2023"
              />
              <ReviewCard
                name="James L"
                rating={3}
                review="“As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"
                date="November 10, 2023"
              />
              <ReviewCard
                name="Fizza F."
                rating={5}
                review="“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
                date="November 24, 2023"
              />
              <ReviewCard
                name="Irfan M"
                rating={5}
                review="“As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"
                date="April 19, 2023"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center p-6 mx-auto mb-10 md:space-y-16">
        <h1 className="text-4xl text-center text-black font-bold-1 mb-14">
          YOU MANY ALSO LIKE
        </h1>
        <div className="grid grid-cols-2 gap-4 mb-10 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                  <p className="flex items-center justify-between gap-2 font-medium justify-betw text-black/60">
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
      </div>
    </>
  );
};

export default Product2;