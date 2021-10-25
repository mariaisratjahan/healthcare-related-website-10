import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useFirebase from './../../hooks/useFirebase';
import useAuth from './../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { signInWithEmailAndPassword } from '@firebase/auth';

const Login = () => {   
    const {user,emailFieldHandler,passwordFieldHandler,handleRegistration,toggleRegister,isRegister,userNameFieldHandler,signInUsingGoogle,error}=useAuth();
    
    return (
        <div className="p-5 m-5">
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
             <h6 className="text-danger">{error}</h6>
            <Button variant="primary" type="submit">
               {isRegister?' Register' : 'Login'}
            </Button>
            </Form>
            {
                !user.email&&<div>
                <div className="text-danger p-5">---------OR, Login Using Google------------</div>
             <Button variant="danger" onClick={signInUsingGoogle}>Google Sign-In</Button>
                </div>
            }
        </div>
    );
};

export default Login;