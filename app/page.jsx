"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=7")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap py-9 gap-7">
          {categories.map((category) => (
            <Link
              href={`/categories/${category}`}
              key={category}
              className="relative font-semibold tracking-widest hover:border-b pb-[1px] hover:pb-0"
            >
              {category}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Image
            width={1000}
            height={1000}
            src="/images/hero-1.jpg"
            alt="..."
          />
        </div>
        <div className="flex flex-col w-[1000px] overflow-x-hidden">
          <h1 className="py-4 text-3xl text-start">Featured Products.</h1>
          <div className="flex justify-start">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="relative flex items-center justify-center border"
              >
                <Image
                  width={500}
                  height={500}
                  src={product.image}
                  alt={product.title}
                  className="p-3"
                />
                <div className="absolute flex flex-col items-center justify-center w-full h-full transition-all duration-700 opacity-0 bg-hoverBG hover:opacity-100">
                  <span className="px-5 text-xs tracking-widest text-center text-white">
                    {product.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center py-8">
          <Image
            width={1000}
            height={1000}
            src="/images/hero-2.jpg"
            alt="..."
          />
        </div>
        <div className="flex items-center justify-center pb-8">
          <Image
            width={1000}
            height={1000}
            src="/images/hero-3.jpg"
            alt="..."
          />
        </div>
      </div>
    </main>
  );
}
