import React from 'react'
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from "react-router-dom";


const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
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
                    />

                    <Form.Control
                    className="mt-3"
                    placeholder="Password*"
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
                        variant="success">
                         {isLogin ? "Sign in" : "Sign up"}   
                        </Button>
                    </Row>
                   
              
                </Form>
            </Card>
        
        </Container>
    )
}
export default Auth;