import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import HomePage from './components/Home';
import ProfilePage from './components/Profile';
import PostsPage from './components/Posts';


export function AppRouter({ isLoggedIn, username, password, setUsername, setPassword, handleLogin, handleLogout }) {
  if (!isLoggedIn) {
    return (
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={
            <LoginPage 
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
            />
          } />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <nav className="header-bar">
        <Link to="/" className='home-button'>Home</Link>
        <Link to="/profile" className='home-button'>Profile</Link>
        <Link to="/posts" className='home-button'>Posts</Link>

        <button 
          onClick={handleLogout}
          style={{
            marginLeft: 'auto',
            marginRight: '20px',
            padding: '8px 10px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </nav>

      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage username={username} />} />
          <Route path="/profile" element={
            <ProfilePage  username={username} setGlobalUsername={setUsername} />
          }/>
          <Route path="/posts" element={<PostsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;