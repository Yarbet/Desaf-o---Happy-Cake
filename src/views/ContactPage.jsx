import { Container } from "react-bootstrap";

import Contact  from "../components/Contacto";

const ContactPage = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuéntanos en que podemos ayudarte</h1>
      <Contact />
    </Container>
  );
};
export default ContactPage;
