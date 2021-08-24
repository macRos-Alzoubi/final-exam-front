import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='d-flex justyfiy-content-between px-5'>
        <Navbar.Brand>My Favorite Flowers</Navbar.Brand>
        <Link to="/" className='px-2'>Home </Link>
        <Link to="/favFlowers" className='px-2'> Fav-Flowers</Link>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
