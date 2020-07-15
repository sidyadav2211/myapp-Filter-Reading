import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import { firebaseAuth } from '../Firebase'

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await firebaseAuth.createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className='container'>
            <h1>Sign up</h1>
            <form onSubmit={handleSignUp} >
                <div className='form-group'>
                    <label className='control-label'>
                        Email</label>
                    <input className='form-control' name="email" type="email" placeholder="Email" />

                    <label className='control-form'>
                        Password</label>
                    <input name="password" type="password" className='form-control' placeholder="Password" />

                    <button type="submit" style={{ marginTop: '25px' }} className='btn btn-primary'>Sign Up</button>
                </div>

            </form>
        </div>
    );
};

export default withRouter(SignUp);
