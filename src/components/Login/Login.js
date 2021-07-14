import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import SocialButton from './SocialButton'



        const handleSocialLoginFailure = (err) => {
    console.error(err)
}


async function loginUser(credentials) {
    return fetch('http://localhost:82/api/login_check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
            .then(data => data.json())
}

export default function Login( { setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });


        console.log(token);

        setToken(token);
    }

    const handleSocialLogin = async (user) => {
        console.log(user);

        var token = await fetch('http://localhost:82/api/login/facebook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
                .then(data => data.json());


        console.log(token);

        setToken(token);

    }

    return(    <div> 
            <div className="login-wrapper">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p> </p>
                        <input type="text" placeholder="Email" onChange={e => setUserName(e.target.value)} />
                    </label>
                    <label>
                        <p> </p>
                        <input type="password"  placeholder="Password"  onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                
                    <SocialButton
                        provider='facebook'
                        appId='172281281621041'
                        onLoginSuccess={handleSocialLogin}
                        onLoginFailure={handleSocialLoginFailure}
                        >
                        Login with Facebook
                    </SocialButton>
                 
            </div>
 </div>
            )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};