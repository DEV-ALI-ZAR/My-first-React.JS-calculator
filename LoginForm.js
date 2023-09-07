import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate authentication (replace with your actual authentication logic)
    if (username === 'ALI' && password === '123') {
      // Store username in localStorage
      localStorage.setItem('username', username);

      // Navigate to the dashboard route
      navigate('/dashboard');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

