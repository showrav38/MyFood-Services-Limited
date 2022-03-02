import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();

  // const { signInUsingEmailandPassword, user, error, setUser, setError, loading, setLoading } =
  //   useAuth();

  // taking location for redirecting
  const location = useLocation();
  const redirect_url = location.state?.from || '/home';

  const history = useHistory();

  const handleLogoutRedirect = () => {
    logOut()
      .then(result => {
        // console.log(result);
        // setUser(result.user);
        history.push(redirect_url);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  return (
    <div>
      <Navbar
        bg="dark"
        style={{ height: '' }}
        variant="dark"
        fixed="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <NavLink as={Link} to="/" style={{ textDecoration: 'none' }}>
            <h3 className="textExtra logg">
              <span c id="textMain">
                {' '}
                MyFood{' '}
              </span>
              Services
            </h3>
          </NavLink>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center bg-dark">
            <Nav.Link
              as={HashLink}
              to="/home#home"
              style={{
                marginRight: '10px',
                textDecoration: 'none',
                fontWeight: 'normal',
                color: 'white',
              }}
            >
              Home
            </Nav.Link>

            {user?.displayName ? (
              <div class="container"style={{marginLeft: '-18px'}}>
                <div class="row">
                  <div class="col">
                    <Nav.Link
                      as={Link}
                      to="/myOrders"
                      style={{
                        marginTop: '20px',
                        textDecoration: 'none',
                        fontWeight: 'normal',
                        color: 'white',
                      }}
                    >
                      My Order
                    </Nav.Link>
                  </div>
                  <div class="col">
                    <NavLink
                      as={Link}
                      to="/manage"
                      style={{
                        marginTop: '20px',
                        textDecoration: 'none',
                        fontWeight: 'normal',
                        color: 'white',
                      }}
                    >
                      Manage Order
                    </NavLink>
                  </div>
                  <div class="col">
                    <NavLink
                      as={Link}
                      to="/addService"
                      style={{
                        marginTop: '20px',
                        textDecoration: 'none',
                        fontWeight: 'normal',
                        color: 'white',
                      }}
                    >
                      Add Services
                    </NavLink>
                  </div>
                  <div class="col">
                    <Button
                      style={{ marginTop: '30px', textDecoration: 'none', fontWeight: 'normal' }}
                      onClick={handleLogoutRedirect}
                      variant="light"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
                {/* <Button onClick={logOut} variant="light">Manage Orders</Button>
                                <Button onClick={logOut} variant="light">Add Service</Button>
                                <Button onClick={logOut} variant="light">Logout</Button> */}
              </div>
            ) : (
              <NavLink
                as={Link}
                to="/login"
                style={{
                  marginRight: '10px',
                  textDecoration: 'none',
                  fontWeight: 'normal',
                  color: 'white',
                }}
              >
                Login
              </NavLink>
            )}
            <Navbar.Text style={{ width: '30%' }}>
              {user.displayName && (
                <a
                  href="/login"
                  style={{
                    margin: '-38px',
                    textDecoration: 'none',
                    fontWeight: 'normal',
                    color: 'white',
                    display: 'inline',
                  }}
                >
                  User: {user?.displayName}
                </a>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
