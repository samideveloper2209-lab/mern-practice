import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalQty } = useCart();

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontWeight: isActive ? "700" : "500",
    color: isActive ? "#111" : "#555",
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        borderBottom: "1px solid #eee",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontSize: "20px",
          fontWeight: "800",
          textDecoration: "none",
          color: "#111",
        }}
      >
        ShopCart
      </Link>

      {/* Links */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/cart" style={linkStyle}>
          Cart
          {totalQty > 0 && (
            <span
              style={{
                marginLeft: 6,
                background: "#111",
                color: "#fff",
                borderRadius: "50%",
                padding: "4px 8px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {totalQty}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
