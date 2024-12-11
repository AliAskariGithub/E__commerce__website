import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const OnSale = () => {
  const products = [
    {
      id: "1",
      name: "Viscose blend shirt",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$100",
      fakeprice: "$190",
      discount: "-40%",
      image: "/images/shirt11.png",
    },
    {
      id: "2",
      name: "Mock Neck Zipper Sweatshirt",
      ratestar: "★★★☆☆",
      rating: 3.5,
      price: "$150",
      fakeprice: "$180",
      discount: "-20%",
      image: "/images/shirt12.png",
    },
    {
      id: "3",
      name: "One life Graphic T-shirt",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$260",
      fakeprice: "$300",
      discount: "-40%",
      image: "/images/shirt10.png",
    },
    {
      id: "4",
      name: "Basic Skinny Jeans",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$160",
      fakeprice: "$190",
      discount: "-30%",
      image: "/images/pent4.png",
    },
  ];

  return (
    <div
      id="onsale"
      className="container flex flex-col items-center justify-center p-6 mx-auto mb-10 space-y-16"
    >
      <h1 className="mb-4 text-4xl text-center text-black font-bold-1">
        ON SALE
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                <span className="text-xs text-black"> {product.rating}/5</span>
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

      <Button variant={"secondary"} className="px-10 py-2 rounded ">
        View All
      </Button>
    </div>
  );
};

export default OnSale;
