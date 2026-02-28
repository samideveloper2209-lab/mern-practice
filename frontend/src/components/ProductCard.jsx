import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden" }}>
      <img src={product.image} alt={product.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
      <div style={{ padding: 12 }}>
        <h3 style={{ margin: "0 0 8px" }}>{product.title}</h3>
        <p style={{ margin: "0 0 12px" }}>Rs. {product.price}</p>

        <button
          onClick={() => addToCart(product)}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}