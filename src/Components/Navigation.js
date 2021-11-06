
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/Pc-Electronics/">Pc Electronics</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Pc-Electronics/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Pc-Electronics/">Administrador</Nav.Link>
                        <NavDropdown title="Inventario" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Pc-Electronics/products/create">Ingresar producto</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Pc-Electronics/products/update">Actualizar producto</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Pc-Electronics/products/delete">Eliminar producto</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Pc-Electronics/products/get">Consultar producto</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Utilidades" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Pc-Electronics/utils/data">Calculadora de datos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Pc-Electronics/utils/value">Calculadora de valor</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )

}

export default Navigation