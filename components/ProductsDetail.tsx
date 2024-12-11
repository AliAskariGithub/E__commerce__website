import Image from "next/image";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const params = useParams();
  const productId = params?.id;

  const products = [
    {
      id: "1",
      name: "Product 1",
      ratestar: "⭐⭐⭐⭐⭐",
      rating: 4.5,
      price: "$100",
      image: "img url",
    },
  ];

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="p-6 text-center">Product not found.</div>;
  }

  return (
    <div className="container grid grid-cols-4 p-6 x-auto">
      <div className="flex flex-col items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={1000}
          height={1000}
          className="object-cover w-full max-w-md rounded"
        />
        <h1 className="mt-4 text-3xl font-bold line-clamp-1">{product.name}</h1>
        <p className="mt-2 text-lg text-gray-600">
          {product.ratestar} {product.rating}
        </p>
        <p className="mt-2 text-lg text-gray-600">Price: {product.price}</p>
      </div>
    </div>
  );
};

export default ProductPage;
