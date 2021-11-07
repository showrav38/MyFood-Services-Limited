import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" style={{ height: '' }} variant="dark" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                    <NavLink as={Link} to="/" style={{ textDecoration: 'none' }}><h3 className="textExtra"><span id="textMain"> MyFood </span>Services</h3></NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center bg-dark">
                        <Nav.Link as={HashLink} to="/home#home" style={{ margin: '10px', textDecoration: 'none', color: 'white' }} >Home</Nav.Link>

                        {user?.displayName ?
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <Nav.Link as={Link} to="/myOrders" style={{ textDecoration: 'none', color: 'white' }}
                                        >My Order</Nav.Link>
                                    </div>
                                    <div class="col">
                                        <NavLink as={Link} to="/manage" style={{ textDecoration: 'none', color: 'white' }}
                                        >Manage Order</NavLink>
                                    </div>
                                    <div class="col">
                                        <NavLink as={Link} to="/addService" style={{ textDecoration: 'none', color: 'white' }}
                                        >Add Services</NavLink>
                                    </div>
                                    <div class="col">
                                        <Button onClick={logOut} variant="light">Logout</Button>
                                    </div>
                                </div>
                                {/* <Button onClick={logOut} variant="light">Manage Orders</Button>
                                <Button onClick={logOut} variant="light">Add Service</Button>
                                <Button onClick={logOut} variant="light">Logout</Button> */}
                            </div>
                            :
                            <NavLink as={Link} to="/login" style={{ margin: '10px', textDecoration: 'none', fontWeight: "bold", color: 'goldenrod' }}
                            >Login</NavLink>}
                        <Navbar.Text>
                            {user.displayName &&
                                <a href="/login" style={{ textDecoration: 'none', paddingLeft: '5px', color: 'yellow', fontWeight: 'bold' }}>User:{user?.displayName}</a>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;