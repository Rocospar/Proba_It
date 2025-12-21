import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [telephone, setTelephone] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        // Send data to backend
        fetch("http://localhost:1234/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ username, email, password })
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === "Success") {
                alert("Account created! Redirecting to login...");
                navigate("/");
            } else {
                alert(data.message);
            }
        })
        .catch(err => alert("Error: " + err));
    };

    return(
        <div className='background'>
           <div className="header-bar">
                <div className="logo-container">
                    <span className="logo-text">Pimp your grill!</span>
                    <div className="Logo"></div>
                </div>
                <div className="header-buttons-container">
                    <div className="header-buttons">
                        <button onClick={() => navigate('/Home')}>Best Grills</button>
                        <button onClick={() => navigate('/Login')}>Login</button>
                        <button onClick={() => navigate('/Register')} style={{ boxShadow: '0 0 0 2px white', borderRadius: '10px', padding: '8px 30px', transition: 'all 0.3s ease' }}>Register</button>
              </div>  
                    </div>
               </div>   
            <div className='RegisterSquare'>
                 <h1>Gata sa devii sef la gratare?</h1>
                 <form onSubmit={handleRegister}>
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="tel" placeholder='Telephone' value={telephone} onChange={(e)=> setTelephone(e.target.value)}/>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>  
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <button type='submit'>Create Account</button>
                 </form>
            </div>
        </div>
    )
}
export default RegisterPage;