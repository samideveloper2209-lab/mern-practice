import { useCart } from "./context/CartContext.jsx";

export default function Cart() {
  const { items, totalPrice, inc, dec, remove, clear } = useCart();

  if (items.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p>Cart empty hai. Home se products add karo.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>

      <div style={{ display: "grid", gap: 12 }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr auto",
              gap: 12,
              alignItems: "center",
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 12,
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: 90, height: 70, objectFit: "cover", borderRadius: 10 }}
            />

            <div>
              <div style={{ fontWeight: 700 }}>{item.title}</div>
              <div>Rs. {item.price} × {item.qty} = <b>Rs. {item.price * item.qty}</b></div>

              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button onClick={() => dec(item.id)} style={{ padding: "6px 10px" }}>-</button>
                <span style={{ minWidth: 22, textAlign: "center" }}>{item.qty}</span>
                <button onClick={() => inc(item.id)} style={{ padding: "6px 10px" }}>+</button>
              </div>
            </div>

            <button onClick={() => remove(item.id)} style={{ padding: "8px 10px" }}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid #eee" }}>
        <h3>Total: Rs. {totalPrice}</h3>
        <button onClick={clear} style={{ padding: 10 }}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}