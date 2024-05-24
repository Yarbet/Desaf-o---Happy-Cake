import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy cake</span> 
      </h1>
      <h6> El lugar de los pasteles felices</h6>
      <img src="https://cdn-icons-png.flaticon.com/512/3125/3125227.png" alt="cake" width="250px" />
    </Container>
  );
};
export default HomePage;
