import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  const { total, cartList } = useCart();
  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        {cartList.length <= 0 ? (
          <h1>Cart is Empty</h1>
        ) : (
          <h1>
            Cart Items: {cartList.length} / ${total}
          </h1>
        )}
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
