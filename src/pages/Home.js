import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Home");

  const products = [
    {
      id: 1,
      name: "headphone example1",
      image: "/assets/images/1001.png",
      price: 10,
    },
    {
      id: 2,
      name: "headphone example2",
      image: "/assets/images/1002.png",
      price: 102,
    },
    {
      id: 3,
      name: "headphone example3",
      image: "/assets/images/1003.png",
      price: 120,
    },
    {
      id: 4,
      name: "headphone example4",
      image: "/assets/images/1004.png",
      price: 130,
    },
    {
      id: 5,
      name: "headphone example4",
      image: "/assets/images/1005.png",
      price: 130,
    },
    {
      id: 6,
      name: "headphone example4",
      image: "/assets/images/1006.png",
      price: 130,
    },
  ];

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
