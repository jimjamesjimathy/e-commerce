"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Category = ({ params }) => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${params.id}`)
      .then((res) => res.json())
      .then((json) => setCat(json));
  }, []);

  console.log(cat);

  return (
    <>
      <h1 className="py-8 text-5xl font-medium text-center capitalize border-b">
        {params.id}
      </h1>
      <div className="flex flex-col py-12 gap-9">
        {cat.map((c) => (
          <Link
            href={`/products/${c.id}`}
            key={c.id}
            className="flex min-h-full px-4 border-b pb-7"
          >
            <div className="flex-[.5] flex items-center w-full">
              <Image
                height={200}
                width={200}
                src={c.image}
                alt={c.title}
                className="object-contain mx-auto "
              />
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-5 text-center">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <span className="text-xs font-semibold tracking-widest">
                {c.description}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
