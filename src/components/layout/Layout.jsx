import { Outlet } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import styles from './layout.module.css';

function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navigation Bar */}


            <Navbar bg='dark' variant='dark' expand="lg" >
                <Container>
                    <Navbar.Brand href='/'>Game Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/games">All Games</Nav.Link>
                            <Nav.Link href="/companies">Companies</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">login</Nav.Link>
                            <Nav.Link href="/">register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Content */}
            <Container fluid className='flex-grow-1'>
                <Row className='flex-grow-1'>
                    <Col md={2} className={` ${styles.sidebar}`}>
                        <h4>Categories</h4>
                        <Nav className="flex-column flex-grow-1">
                            <Nav.Link className='text-light' href="#">Action</Nav.Link>
                            <Nav.Link className='text-light' href="#">Adventure</Nav.Link>
                            <Nav.Link className='text-light' href="#">Sports</Nav.Link>
                            <Nav.Link  className='text-light' href="#">RPG</Nav.Link>
                        </Nav>

                        <h4 className="mt-4">Filters</h4>
                        <div className="mb-3">
                            <label className="form-label">Price Range</label>
                            <input type="range" className="form-range" min="0" max="100" />
                        </div>
                    </Col>
                    <Col md={9} className="p-4">
                       <Outlet/>
                    </Col>
                </Row>
            </Container>
            {/* Footer */}
            <footer className="bg-dark text-white text-center p-3 mt-auto flex-grow-2">
                <Container>
                    <p>© 2023 GameStore. All rights reserved.</p>
                </Container>
            </footer>
        </div>
    );
}

export default Layout;
