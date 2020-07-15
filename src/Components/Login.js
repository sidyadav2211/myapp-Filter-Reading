import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'

import { AuthContext } from './Auth'
import { firebaseAuth } from '../Firebase'
import { Link } from 'react-router-dom'

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebaseAuth.signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className='container'>
            <h4 ><Link to='/signup' style={{ float: "right" }} className='btn btn-primary'>Sign Up</Link></h4>
            <h1>Log In</h1>

            <form onSubmit={handleLogin} >
                <div className='form-group'>
                    <label htmlFor='email' className='control-label'>
                        Email</label>
                    <input name="email" id='email' className='form-control' type="email" placeholder="Email" />

                    <label className='control-label' htmlFor='password'>
                        Password</label>
                    <input name="password" className='form-control' id='Password' type="password" placeholder="Password" />

                    <button type="submit" style={{ marginTop: '40px', alignContent: 'center' }} className='btn btn-primary'>Log In</button>


                </div>
            </form>
        </div>
    );
};


export default withRouter(Login);
