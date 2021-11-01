import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className='logins'>
            <h2>please Login</h2>
            <button onClick={signInUsingGoogle} className='btn btn-warning'>Google Sign in</button>
        </div>
    );
};

export default Login;