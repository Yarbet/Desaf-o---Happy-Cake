import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar>
      <Container className="justify-content-between">
        <Nav>
          <Link to="/" className="nav-link text-white">
            Home 🏠
          </Link>
          <Link to="/contacto" className="nav-link text-white">
            Contacto 📒
          </Link>
        </Nav>
      </Container>
      <Navbar.Brand className="ms-auto text-white">Happy cake 🍰</Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;