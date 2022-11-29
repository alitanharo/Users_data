import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/"> <b><i>OmboriTask</i></b></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/user/create">New User</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
           
        
    );
}

export default NavBar ;