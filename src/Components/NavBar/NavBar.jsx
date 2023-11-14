import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWiget from '../CartWiget/CartWiget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Notros</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">contacto</Nav.Link>
            <Nav.Link href="#cart"><CartWiget></CartWiget></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBar;