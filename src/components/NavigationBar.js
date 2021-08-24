import { withAuth0 } from "@auth0/auth0-react";
import { Component } from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
class NavigationBar extends Component{
    render(){
        const { isAuthenticated } = this.props.auth0;
        return(<header>
              <Navbar bg="dark" variant="dark" className='d-flex justyfiy-content-between px-5'>
                <Container>
                <Navbar.Brand >Flowers</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to='/'>Home</Link>
                    <Link to='/favFlowers'>Flower</Link>
                </Nav>
                </Container>
            {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
            </Navbar>
        </header>);
    }
}

export default withAuth0(NavigationBar);