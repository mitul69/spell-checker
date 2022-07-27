import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../stores/hooks';
import { SpellState } from '../spell/SpellSlice';

const Header = () => {

    const {favourites} = useAppSelector(SpellState);
    return (<Navbar sticky="top" bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >Spell Checker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/favourites">Favourites
                    {favourites.length >= 1 &&
                    <Badge>{favourites.length}</Badge> }
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Header;