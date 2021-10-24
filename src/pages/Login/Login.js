import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useFirebase from './../../hooks/useFirebase';

const Login = () => {   
    const {emailFieldHandler,passwordFieldHandler,handleRegistration,toggleRegister,isRegister,userNameFieldHandler}=useFirebase();
    
    
   
    return (
        <div>
         <h2>Please {isRegister? 'Register': 'Login'}</h2>
            <Form onSubmit={handleRegistration}>
            {
                isRegister && <Form.Group  className="mb-3" controlId="formBasicName">
                <Form.Label>UserName</Form.Label>
                <Form.Control onBlur={userNameFieldHandler} type="text" placeholder="Enter UserName" />
            </Form.Group>
            }
            <Form.Group  className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={emailFieldHandler} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={passwordFieldHandler} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onChange={toggleRegister} type="checkbox" label="Not Registered Yet ?" />
            </Form.Group>
            <Button  variant="primary" type="submit">
               {isRegister?' Register' : 'Login'}
            </Button>
            </Form>
        </div>
    );
};

export default Login;