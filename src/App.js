import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(''); // Store the logged-in username

  const handleLogin = (loggedInUsername) => {
    setUsername(loggedInUsername);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      {isLoggedIn ? (
        <AdminPanel onLogout={handleLogout} username={username} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
