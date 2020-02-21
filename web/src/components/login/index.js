import React, { useState } from 'react';
import './style.css';

function Login({ onSubmit }) {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    async function handleLoginUser(e) {
        e.preventDefault();
        onSubmit({ email, password });
    }
    
    return (
        <div className="login-page">
            <div className="form">
                <form onSubmit={handleLoginUser} className="login-form">
                    <input type="Email" value={email} required placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <input type="password" value={password} required placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Sign in</button>
                    <p className="message">
                        Don’t have an account? <a href="/">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;