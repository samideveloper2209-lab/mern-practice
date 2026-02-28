import ProductCard from "./components/ProductCard.jsx";
import { products } from "./data/Products.js";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <h2>Products</h2>
      <Container>
        <Row>
            <Col  lg={3} style={{
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      > {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
             
            </Col>
        </Row>
      </Container>
    
    </div>
  );
}
