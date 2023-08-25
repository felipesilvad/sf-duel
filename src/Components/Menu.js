import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Image} from 'react-bootstrap';

function BasicExample() {
  return (
    <Navbar className='navbar-dark' bg="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/"><Image className='logo-img' src={require(`../Assets/logo.png`)} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='ardela menu-button' href="/">Fighters</Nav.Link>
            <Nav.Link className='ardela menu-button' href="/combo-simulator">Combo Simulator</Nav.Link>
            <Nav.Link className='ardela menu-button' href="/fighting-souls">Fighting Souls</Nav.Link>
            <Nav.Link className='ardela menu-button' href="/puzzles">Puzzles</Nav.Link>
            <Nav.Link className='ardela menu-button' href="/boss">Bosses</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;