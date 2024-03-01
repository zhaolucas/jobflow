import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './style.css'; 

function Navigation() {
    return (
        <>
            <Navbar expand="lg" className="nav-bg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logo3.webp`} // Assuming logo3 is the complete filename including extension, e.g., logo3.svg or logo3.png
                            alt="JobFlow Logo"
                            style={{ marginRight: '10px', height: '30px' }} // Adjust size as needed
                        />
                        JobFlow
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="./">Current Jobs</Nav.Link>
                            <Nav.Link href="./JobForm">Add Job</Nav.Link>
                            <Nav.Link href="./JobSearch">Search Jobs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
