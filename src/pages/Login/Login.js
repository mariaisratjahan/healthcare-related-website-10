import React from 'react';
import useFirebase from './../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle}=useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>googgle</button>
        </div>
    );
};

export default Login;