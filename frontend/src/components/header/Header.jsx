import React, { useRef, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.css';
import { AuthContext } from '../../context/AuthContext';
const nav__links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
];

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        if (headerRef.current) {
          headerRef.current.classList.add('sticky_header');
        }
      } else {
        if (headerRef.current) {
          headerRef.current.classList.remove('sticky_header');
        }
      }
    };

    window.addEventListener('scroll', stickyHeaderFunc);

    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* logo */}
            <div className="logo">
              <img src={logo} alt="Travelworld Logo" />
            </div>

            {/* Navigation */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active_link' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons + Menu */}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    {/* 👤 Username */}
                    <h5 className="mb-0">{user.username}</h5>

                    {/* 📖 My Bookings link */}


                    {/* 🚪 Logout button */}
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                    <NavLink
                      to="/my-bookings"
                      className="btn btn-outline-primary d-flex align-items-center gap-2"
                      title="My Bookings"
                    >
                      <i className="ri-bookmark-line"></i> Bookings
                    </NavLink>
                  </>
                ) : (
                  <>
                    {/* 🔐 Login & Register */}
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>

              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
