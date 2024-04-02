import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles.css";

function Admin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (username === 'Healthy Idaho' && password === 'spring24') {
        if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
            // Successful login, you can redirect or do any further action here
            // setError('');
            // alert('Login successful!');
            navigate('/admin-control');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className={error ? 'error-message' : 'hidden'}>
                {error && <p>{error}</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Admin;
