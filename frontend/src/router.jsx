import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import HomePage from './components/Home';
import ProfilePage from './components/Profile';
import PostsPage from './components/Posts';

export function AppRouter({ isLoggedIn, username, password, setUsername, setPassword, handleLogin, handleLogout }) {
  return (
    <Router>
      <nav className="header-bar">
        <Link to="/" className='home-button'>Home</Link>
        <Link to="/posts" className='home-button'>Posts</Link>

        {isLoggedIn && (
          <Link to="/profile" className='home-button'>Profile</Link>
        )}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          {isLoggedIn ? (

            <button onClick={handleLogout} className="home-button" style={{ backgroundColor: 'red', border: 'none' }}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className='home-button'>Login</Link>
              <Link to="/register" className='home-button'>Register</Link>
            </>
          )}
        </div>
      </nav>

      <div className="page-content">
        <Routes>
          {/* 3. Home is now the default page ("/") */}
          <Route path="/" element={<HomePage username={username} />} />
          
          <Route path="/posts" element={<PostsPage />} />

          {/* Login/Register Routes */}
          <Route path="/login" element={
            isLoggedIn ? <Navigate to="/" /> : <LoginPage username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin} />
          } />
          
          <Route path="/register" element={
            isLoggedIn ? <Navigate to="/" /> : <RegisterPage />
          } />

          {/* Profile is protected */}
          <Route path="/profile" element={
             isLoggedIn ? <ProfilePage username={username} setGlobalUsername={setUsername} /> : <Navigate to="/login" />
          } />

          {/* Redirect unknown pages to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;