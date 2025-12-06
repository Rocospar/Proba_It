import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
            <div className='RegisterSquare'>
                 <h1>Register</h1>
                 <form onSubmit={handleRegister}>
                     <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
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