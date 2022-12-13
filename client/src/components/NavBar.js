import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { observer} from 'mobx-react-lite';
import { SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>The best store</NavLink>
          {user.isAuth ? 
             <Nav className="ml-auto" style={{color: 'whitesmoke'}}>
             <Button variant="outline-light">Admin</Button>
              <Button variant="outline-light" className="ml-4">Log in</Button>
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