import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // Toggle between login and signup
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = () => {
    const { username, password } = credentials;
    const savedCredentials = JSON.parse(localStorage.getItem('users')) || {};

    if (savedCredentials[username] && savedCredentials[username] === password) {
      onLogin(username); // Pass the logged-in username to App
    } else {
      setError('Invalid username or password');
    }
  };

  const handleCreateAccount = () => {
    const { username, password } = credentials;

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    const savedCredentials = JSON.parse(localStorage.getItem('users')) || {};

    if (savedCredentials[username]) {
      setError('Username already exists');
    } else {
      savedCredentials[username] = password;
      localStorage.setItem('users', JSON.stringify(savedCredentials));
      setIsCreatingAccount(false);
      setError(''); // Clear errors
      alert('Account created successfully! You can now log in.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">{isCreatingAccount ? 'Create Account' : 'Admin Login'}</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder=' Enter Username'
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        {isCreatingAccount ? (
          <>
            <button className="btn btn-primary w-100 mb-3" onClick={handleCreateAccount}>
              Create Account
            </button>
            <button
              className="btn btn-secondary w-100"
              onClick={() => {
                setIsCreatingAccount(false);
                setError('');
              }}
            >
              Back to Login
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>
              Login
            </button>
            <button
              className="btn btn-secondary w-100"
              onClick={() => {
                setIsCreatingAccount(true);
                setError('');
              }}
            >
              Create Account
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
