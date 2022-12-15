import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { observer} from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>The best store</NavLink>
          {user.isAuth ? 
             <Nav className="ml-auto" style={{color: 'whitesmoke'}}>
             <Button 
             onClick={() => navigate(ADMIN_ROUTE)}
             variant="outline-light"
             >Admin</Button>
              <Button 
              onClick={() => navigate(LOGIN_ROUTE)}
              variant="outline-light" className="ml-4">Log out</Button>
             </Nav>
             :
             <Nav className="ml-auto" style={{color: 'whitesmoke'}}>
              <Button variant="outline-light" onClick={() => user.setAuth(true)}>Log in</Button>
             </Nav>}
       
        </Container>
      </Navbar>
    )
}
)
export default NavBar;