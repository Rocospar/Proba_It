import React, { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './router';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('http://localhost:1234/check-session', {
          method: 'GET',
          credentials: 'include'
        });

        const data = await response.json();
        if (data.isLoggedIn) {
          setIsLoggedIn(true);
          setUsername(data.username);
        }
      } catch (err) {
        console.error("Error checking session:", err);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault(); 
    console.log("Attempting login with:", username, password); 

    try {
      const response = await fetch('http://localhost:1234/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      
      console.log("Server response:", data); 

      if (data.status === "Succes") { 
        console.log("Login Successful! Switching state..."); 
        setIsLoggedIn(true);
      } else {
        alert(data.message); 
      }
    } catch (err) {
      console.error(err);
      alert("Connection Error!");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:1234/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      setIsLoggedIn(false);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  }

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }
  return <AppRouter 
    isLoggedIn={isLoggedIn}
    username={username}
    password={password}
    setUsername={setUsername}
    setPassword={setPassword}
    handleLogin={handleLogin}
    handleLogout={handleLogout}
  />;
}
export default App;