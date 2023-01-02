import React, { useContext, useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from "react-router-dom";
import { registration, login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const click = async() => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
        } else {
            data = await registration(email, password);
            console.log(data)
        }
        user.setUser(data)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE)
       } catch (e){
            
       }
       
    }
    return (
        <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}>
            
            
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "AUTHORIZATION" : "Sign up"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                    className="mt-3"
                    placeholder="Email*"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <Form.Control
                    className="mt-3"
                    placeholder="Password*"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ? <div>Not a member?<NavLink to={REGISTRATION_ROUTE}>Create your account</NavLink></div>
                        :
                        <div>
                            Already have an account?<NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                        </div>
                        }
                        <Button 
                        className="mt-3"
                        variant="success"
                        onClick={click}>
                         {isLogin ? "Sign in" : "Sign up"}   
                        </Button>
                    </Row>
                   
              
                </Form>
            </Card>
        
        </Container>
    )
}
)
export default Auth;