import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const TopSelling = () => {
  const products = [
    {
      id: "9",
      name: "Plane Ornage Shirt",
      ratestar: "★★★★★",
      rating: 5,      
      fakeprice: "$232",
      discount: "-20%",
      price: "$212",
      image:
        "/images/shirt5.png",
    },
    {
      id: "13",
      name: "Polo with Contrast Trims",
      ratestar: "★★★★",
      rating: 4,
      price: "$212",

      image:
        "/images/shirt6.png",
    },
    {
      id: "14",
      name: "Loose Fit Bermuda Shorts",
      ratestar: "★★★",
      rating: 3,
      price: "$80",
      image:
        "/images/pent2.png",
    },
    {
      id: "15",
      name: "Faded Skinny Jeans",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$210",
      image:
        "/images/pent3.png",
    },
  ];

  return (
    <div id="brand" className="container flex flex-col items-center justify-center p-6 mx-auto mb-10 space-y-16">
      <h1 className="mb-4 text-4xl text-center text-black font-bold-1">
        TOP SELLING
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

export default TopSelling;
