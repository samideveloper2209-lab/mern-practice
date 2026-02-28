import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar.jsx"; // agar Navbar src me hai
import Home from "./Home.jsx";     // agar Home src me hai
import Cart from "./Cart.jsx";     // agar Cart src me hai

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: 16, maxWidth: 1100, margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}
