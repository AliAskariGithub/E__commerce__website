import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Arrivals = () => {
  const products = [
    {
      id: "5",
      name: "T-shirt with Tapa Details",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$120",
      image: "/images/shirt1.png",
    },
    {
      id: "6",
      name: "Skinny Fit Jeans",
      ratestar: "★★★☆☆",
      rating: 3.5,
      price: "$240",
      fakeprice: "$260",
      discount: "-20%",
      image: "/images/pent1.png",
    },
    {
      id: "7",
      name: "Checkered Shirt",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$180",
      image: "/images/shirt2.png",
    },
    {
      id: "8",
      name: "Sleeve Stripted T-shirt",
      ratestar: "★★★★☆",
      rating: 4.5,
      price: "$130",
      fakeprice: "$160",
      discount: "-30%",
      image: "/images/shirt3.png",
    },
  ];

  return (
    <div
      id="newarrivals"
      className="container flex flex-col items-center justify-center p-6 mx-auto mb-10 space-y-16"
    >
      <h1 className="mb-4 text-4xl text-center text-black font-bold-1">
        NEW ARRIVALS
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

export default Arrivals;
