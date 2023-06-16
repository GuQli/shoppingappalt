import React from "react";
import { CartCard } from "../components/CartCard";
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {
  useTitle("Cart");

  const cartList = [
    {
      id: 1,
      name: "headphone example1",
      image: "/assets/images/1001.png",
      price: "10",
    },
    {
      id: 2,
      name: "headphone example2",
      image: "/assets/images/1002.png",
      price: "102",
    },
  ];

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length}</h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
