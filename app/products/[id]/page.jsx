"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const SingleProduct = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Error loading product</p>;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-1">
        <div className="flex-1">
          <Image
            height={375}
            width={375}
            src={product.image}
            alt={product.title}
            className="object-contain mx-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center flex-1 px-12 gap-7">
          <div className="text-center">
            <h1 className="w-full mb-5 text-4xl">{product.title}</h1>
            <span className="font-normal pb-7">{product.description}</span>
          </div>
          <div className="flex items-center justify-center w-full gap-7">
            <span className="font-semibold">
              price: &nbsp;
              <span className="font-normal">{product.price}</span>
            </span>
            <span className="font-semibold">
              category: &nbsp;
              <span className="font-normal">{product.category}</span>
            </span>
            <span className="font-semibold">
              rating: &nbsp;
              <span className="font-normal">{product.rating.rate}</span>
            </span>
            <span className="">
              rated by
              <span className="px-2 font-semibold">{product.rating.count}</span>
              users
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
