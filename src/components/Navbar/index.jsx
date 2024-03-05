import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'; 

function Navigation() {
    return (
        <>
            <Navbar expand="lg" className="nav-bg">
                <Container>
                    <Navbar.Brand href="./">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logo3.webp`}
                            style={{ marginRight: '30px', height: '60px' }} 
                            alt="JobFlow Logo"
                        />
                        JobFlow
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="./">Current Jobs</Nav.Link>
                            <Nav.Link href="./JobForm">Add Jobs</Nav.Link>
                            <Nav.Link href="./JobSearch">Search Jobs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;