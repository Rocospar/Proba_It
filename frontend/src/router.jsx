import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import HomePage from './components/Home';
import ProfilePage from './components/Profile';
import PostsPage from './components/Posts';

export function AppRouter({ isLoggedIn, username, password, setUsername, setPassword, handleLogin, handleLogout }) {
  return (
    <Router>
      <Routes>
        
        
        <Route path="/" element={
          <HomePage 
            username={username} 
            isLoggedIn={isLoggedIn} 
            handleLogout={handleLogout} 
          />
        } />
        
        <Route path="/posts" element={<PostsPage />} />

        <Route path="/login" element={
          isLoggedIn ? <Navigate to="/" /> : (
            <LoginPage 
              username={username} 
              setUsername={setUsername} 
              password={password} 
              setPassword={setPassword} 
              handleLogin={handleLogin}
          
              isLoggedIn={isLoggedIn}
            />
          )
        } />
        
        <Route path="/register" element={
          isLoggedIn ? <Navigate to="/" /> : (
            <RegisterPage 
               isLoggedIn={isLoggedIn} 
            />
          )
        } />

        <Route path="/profile" element={
           isLoggedIn ? (
             <ProfilePage 
               username={username} 
               setGlobalUsername={setUsername} 
               handleLogout={handleLogout} 
             />
           ) : <Navigate to="/login" />
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;